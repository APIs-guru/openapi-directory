from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CaptionSource:
    r"""CaptionSource
    A source file for the input sidecar captions used during the transcoding process.
    """
    
    encryption: Optional[Encryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encryption') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeOffset') }})
    
