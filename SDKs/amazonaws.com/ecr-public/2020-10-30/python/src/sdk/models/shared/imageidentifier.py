from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageIdentifier:
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTag' }})
    
