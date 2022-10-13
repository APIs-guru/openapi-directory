from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesspreviewsummary


@dataclass_json
@dataclass
class ListAccessPreviewsResponse:
    access_previews: List[accesspreviewsummary.AccessPreviewSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPreviews' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
