from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Thumbnails:
    r"""Thumbnails
    Thumbnails for videos.
    """
    
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    max_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHeight') }})
    max_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxWidth') }})
    padding_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaddingPolicy') }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resolution') }})
    sizing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizingPolicy') }})
    
