from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagepipeline


@dataclass_json
@dataclass
class GetImagePipelineResponse:
    image_pipeline: Optional[imagepipeline.ImagePipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePipeline' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
