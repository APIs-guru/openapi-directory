from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import frequency
from . import polarization_enum


@dataclass_json
@dataclass
class UplinkSpectrumConfig:
    center_frequency: frequency.Frequency = field(default=None, metadata={'dataclasses_json': { 'field_name': 'centerFrequency' }})
    polarization: Optional[polarization_enum.PolarizationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polarization' }})
    
