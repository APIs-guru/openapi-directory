from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Clip:
    r"""Clip
    Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.
    """
    
    time_span: Optional[TimeSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSpan') }})
    
