from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrackingConfig:
    r"""TrackingConfig
    Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.
    """
    
    autotrack: CriticalityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autotrack') }})
    
