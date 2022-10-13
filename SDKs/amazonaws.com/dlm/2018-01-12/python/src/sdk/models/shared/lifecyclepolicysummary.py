from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policytypevalues_enum
from . import gettablepolicystatevalues_enum


@dataclass_json
@dataclass
class LifecyclePolicySummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    policy_type: Optional[policytypevalues_enum.PolicyTypeValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    state: Optional[gettablepolicystatevalues_enum.GettablePolicyStateValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
