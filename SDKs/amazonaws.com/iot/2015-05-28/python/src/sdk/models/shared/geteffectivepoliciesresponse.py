from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import effectivepolicy


@dataclass_json
@dataclass
class GetEffectivePoliciesResponse:
    effective_policies: Optional[List[effectivepolicy.EffectivePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectivePolicies' }})
    
