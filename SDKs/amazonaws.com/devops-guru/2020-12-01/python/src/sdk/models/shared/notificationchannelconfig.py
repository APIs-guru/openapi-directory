from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import snschannelconfig


@dataclass_json
@dataclass
class NotificationChannelConfig:
    sns: snschannelconfig.SnsChannelConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sns' }})
    
