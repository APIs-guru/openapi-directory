from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import additionalconstraintselement_enum


@dataclass_json
@dataclass
class CreateBackendAuthPasswordPolicyConfig:
    additional_constraints: Optional[List[additionalconstraintselement_enum.AdditionalConstraintsElementEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalConstraints' }})
    minimum_length: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumLength' }})
    
