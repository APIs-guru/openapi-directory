from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class GetImageResponse:
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
