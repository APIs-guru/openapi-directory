from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imageactiontype_enum


@dataclass_json
@dataclass
class LifecyclePolicyRuleAction:
    type: Optional[imageactiontype_enum.ImageActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
