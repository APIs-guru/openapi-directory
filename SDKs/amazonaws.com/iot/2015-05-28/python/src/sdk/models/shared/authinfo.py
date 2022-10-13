from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actiontype_enum


@dataclass_json
@dataclass
class AuthInfo:
    action_type: Optional[actiontype_enum.ActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    resources: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
