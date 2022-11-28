from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AudioCodecOptions:
    r"""AudioCodecOptions
    Options associated with your audio codec.
    """
    
    bit_depth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitDepth') }})
    bit_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BitOrder') }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Profile') }})
    signed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signed') }})
    
