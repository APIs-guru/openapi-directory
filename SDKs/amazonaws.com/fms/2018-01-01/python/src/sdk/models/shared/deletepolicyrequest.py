from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletePolicyRequest:
    delete_all_policy_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteAllPolicyResources' }})
    policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    
