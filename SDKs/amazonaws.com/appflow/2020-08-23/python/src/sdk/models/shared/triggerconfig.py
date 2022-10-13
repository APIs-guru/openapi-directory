from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import triggerproperties
from . import triggertype_enum


@dataclass_json
@dataclass
class TriggerConfig:
    trigger_properties: Optional[triggerproperties.TriggerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerProperties' }})
    trigger_type: triggertype_enum.TriggerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerType' }})
    
