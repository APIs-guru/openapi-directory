from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exclusionpreview
from . import previewstatus_enum


@dataclass_json
@dataclass
class GetExclusionsPreviewResponse:
    exclusion_previews: Optional[List[exclusionpreview.ExclusionPreview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionPreviews' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    preview_status: previewstatus_enum.PreviewStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previewStatus' }})
    
