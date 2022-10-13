from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CopyImageRequest:
    destination_image_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationImageDescription' }})
    destination_image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationImageName' }})
    destination_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationRegion' }})
    source_image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceImageName' }})
    
