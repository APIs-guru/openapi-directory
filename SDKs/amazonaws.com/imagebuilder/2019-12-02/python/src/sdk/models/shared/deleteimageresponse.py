from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteImageResponse:
    image_build_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageBuildVersionArn' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
