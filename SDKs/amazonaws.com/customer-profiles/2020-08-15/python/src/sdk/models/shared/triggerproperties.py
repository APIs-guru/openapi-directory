from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import scheduledtriggerproperties


@dataclass_json
@dataclass
class TriggerProperties:
    scheduled: Optional[scheduledtriggerproperties.ScheduledTriggerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scheduled' }})
    
