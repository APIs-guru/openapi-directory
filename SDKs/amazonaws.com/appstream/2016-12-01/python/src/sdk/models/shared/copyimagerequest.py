from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CopyImageRequest:
    destination_image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationImageName') }})
    destination_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationRegion') }})
    source_image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImageName') }})
    destination_image_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationImageDescription') }})
    
