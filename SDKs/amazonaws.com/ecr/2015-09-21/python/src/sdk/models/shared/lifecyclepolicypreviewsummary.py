from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LifecyclePolicyPreviewSummary:
    expiring_image_total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiringImageTotalCount' }})
    
