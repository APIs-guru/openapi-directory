from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetRepositoryPolicyRequest:
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    policy_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyText' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
