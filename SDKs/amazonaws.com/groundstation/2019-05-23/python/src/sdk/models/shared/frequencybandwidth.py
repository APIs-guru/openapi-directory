from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import bandwidthunits_enum


@dataclass_json
@dataclass
class FrequencyBandwidth:
    units: bandwidthunits_enum.BandwidthUnitsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
