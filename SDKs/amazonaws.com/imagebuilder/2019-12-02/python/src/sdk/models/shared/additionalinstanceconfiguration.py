from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systemsmanageragent


@dataclass_json
@dataclass
class AdditionalInstanceConfiguration:
    systems_manager_agent: Optional[systemsmanageragent.SystemsManagerAgent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemsManagerAgent' }})
    user_data_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDataOverride' }})
    
