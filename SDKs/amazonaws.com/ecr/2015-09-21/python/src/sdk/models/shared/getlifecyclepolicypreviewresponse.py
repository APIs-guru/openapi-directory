from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLifecyclePolicyPreviewResponse:
    lifecycle_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecyclePolicyText') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    preview_results: Optional[List[LifecyclePolicyPreviewResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewResults') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    status: Optional[LifecyclePolicyPreviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    summary: Optional[LifecyclePolicyPreviewSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
