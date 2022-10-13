from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import generatedpolicy


@dataclass_json
@dataclass
class GeneratedPolicyResult:
    generated_policies: Optional[List[generatedpolicy.GeneratedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedPolicies' }})
    properties: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
