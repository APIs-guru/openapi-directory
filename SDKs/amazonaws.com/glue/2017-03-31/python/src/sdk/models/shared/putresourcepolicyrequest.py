from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import enablehybridvalues_enum
from . import existcondition_enum


@dataclass_json
@dataclass
class PutResourcePolicyRequest:
    enable_hybrid: Optional[enablehybridvalues_enum.EnableHybridValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableHybrid' }})
    policy_exists_condition: Optional[existcondition_enum.ExistConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyExistsCondition' }})
    policy_hash_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyHashCondition' }})
    policy_in_json: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyInJson' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    
