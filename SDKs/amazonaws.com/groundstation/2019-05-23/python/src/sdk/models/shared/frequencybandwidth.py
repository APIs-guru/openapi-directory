from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FrequencyBandwidth:
    r"""FrequencyBandwidth
    Object that describes the frequency bandwidth. 
    """
    
    units: BandwidthUnitsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
