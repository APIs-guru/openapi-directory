from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lifecyclepolicy


@dataclass_json
@dataclass
class LifecycleConfigurationDescription:
    lifecycle_policies: Optional[List[lifecyclepolicy.LifecyclePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecyclePolicies' }})
    
