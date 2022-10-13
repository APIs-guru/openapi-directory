from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartLifecyclePolicyPreviewRequest:
    lifecycle_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecyclePolicyText' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
