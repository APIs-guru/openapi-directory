from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UplinkSpectrumConfig:
    r"""UplinkSpectrumConfig
    Information about the uplink spectral <code>Config</code>.
    """
    
    center_frequency: Frequency = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerFrequency') }})
    polarization: Optional[PolarizationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polarization') }})
    
