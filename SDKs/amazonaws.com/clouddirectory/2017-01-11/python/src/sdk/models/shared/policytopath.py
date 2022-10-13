from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policyattachment


@dataclass_json
@dataclass
class PolicyToPath:
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    policies: Optional[List[policyattachment.PolicyAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    
