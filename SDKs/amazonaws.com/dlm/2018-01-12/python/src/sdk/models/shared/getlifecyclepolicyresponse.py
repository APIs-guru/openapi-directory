from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lifecyclepolicy


@dataclass_json
@dataclass
class GetLifecyclePolicyResponse:
    policy: Optional[lifecyclepolicy.LifecyclePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    
