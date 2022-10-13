from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateUpdatedImageRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    existing_image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existingImageName' }})
    new_image_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newImageDescription' }})
    new_image_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newImageDisplayName' }})
    new_image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newImageName' }})
    new_image_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newImageTags' }})
    
