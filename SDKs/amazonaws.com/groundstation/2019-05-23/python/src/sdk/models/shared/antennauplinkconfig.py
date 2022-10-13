from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import uplinkspectrumconfig
from . import eirp


@dataclass_json
@dataclass
class AntennaUplinkConfig:
    spectrum_config: uplinkspectrumconfig.UplinkSpectrumConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spectrumConfig' }})
    target_eirp: eirp.Eirp = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetEirp' }})
    transmit_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmitDisabled' }})
    
