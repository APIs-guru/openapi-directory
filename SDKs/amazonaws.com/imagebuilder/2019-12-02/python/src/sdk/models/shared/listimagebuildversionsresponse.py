from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagesummary


@dataclass_json
@dataclass
class ListImageBuildVersionsResponse:
    image_summary_list: Optional[List[imagesummary.ImageSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
