from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagepipeline


@dataclass_json
@dataclass
class ListImagePipelinesResponse:
    image_pipeline_list: Optional[List[imagepipeline.ImagePipeline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePipelineList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
