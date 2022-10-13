from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Container:
    image_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUris' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
