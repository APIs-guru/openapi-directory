from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobWatermark:
    r"""JobWatermark
    Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
    """
    
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    input_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputKey') }})
    preset_watermark_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetWatermarkId') }})
    
