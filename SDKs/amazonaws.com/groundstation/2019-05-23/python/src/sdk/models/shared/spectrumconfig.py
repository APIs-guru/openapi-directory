from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpectrumConfig:
    r"""SpectrumConfig
    Object that describes a spectral <code>Config</code>.
    """
    
    bandwidth: FrequencyBandwidth = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    center_frequency: Frequency = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerFrequency') }})
    polarization: Optional[PolarizationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polarization') }})
    
