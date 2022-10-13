from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagefailurecode_enum
from . import imageidentifier


@dataclass_json
@dataclass
class ImageFailure:
    failure_code: Optional[imagefailurecode_enum.ImageFailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    image_id: Optional[imageidentifier.ImageIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    
