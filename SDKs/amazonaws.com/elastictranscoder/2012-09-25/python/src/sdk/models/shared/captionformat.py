from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CaptionFormat:
    r"""CaptionFormat
    The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
    """
    
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pattern') }})
    
