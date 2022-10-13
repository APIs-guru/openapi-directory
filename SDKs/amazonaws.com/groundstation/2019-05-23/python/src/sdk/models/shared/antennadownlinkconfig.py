from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import spectrumconfig


@dataclass_json
@dataclass
class AntennaDownlinkConfig:
    spectrum_config: spectrumconfig.SpectrumConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spectrumConfig' }})
    
