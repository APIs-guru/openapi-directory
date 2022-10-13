from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lifecyclepolicypreviewresult
from . import lifecyclepolicypreviewstatus_enum
from . import lifecyclepolicypreviewsummary


@dataclass_json
@dataclass
class GetLifecyclePolicyPreviewResponse:
    lifecycle_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecyclePolicyText' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    preview_results: Optional[List[lifecyclepolicypreviewresult.LifecyclePolicyPreviewResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewResults' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    status: Optional[lifecyclepolicypreviewstatus_enum.LifecyclePolicyPreviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    summary: Optional[lifecyclepolicypreviewsummary.LifecyclePolicyPreviewSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
