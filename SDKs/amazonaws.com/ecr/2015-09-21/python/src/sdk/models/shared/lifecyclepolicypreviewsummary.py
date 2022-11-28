from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LifecyclePolicyPreviewSummary:
    r"""LifecyclePolicyPreviewSummary
    The summary of the lifecycle policy preview request.
    """
    
    expiring_image_total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiringImageTotalCount') }})
    
