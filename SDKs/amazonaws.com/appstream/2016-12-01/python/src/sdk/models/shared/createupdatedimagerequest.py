from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateUpdatedImageRequest:
    existing_image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingImageName') }})
    new_image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newImageName') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryRun') }})
    new_image_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newImageDescription') }})
    new_image_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newImageDisplayName') }})
    new_image_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newImageTags') }})
    
