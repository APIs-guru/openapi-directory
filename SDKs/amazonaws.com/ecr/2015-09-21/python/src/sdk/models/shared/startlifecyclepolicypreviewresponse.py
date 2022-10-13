from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lifecyclepolicypreviewstatus_enum


@dataclass_json
@dataclass
class StartLifecyclePolicyPreviewResponse:
    lifecycle_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecyclePolicyText' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    status: Optional[lifecyclepolicypreviewstatus_enum.LifecyclePolicyPreviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
