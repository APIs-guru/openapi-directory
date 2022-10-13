from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import decodeconfig
from . import demodulationconfig
from . import spectrumconfig


@dataclass_json
@dataclass
class AntennaDownlinkDemodDecodeConfig:
    decode_config: decodeconfig.DecodeConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decodeConfig' }})
    demodulation_config: demodulationconfig.DemodulationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demodulationConfig' }})
    spectrum_config: spectrumconfig.SpectrumConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spectrumConfig' }})
    
