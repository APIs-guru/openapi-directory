from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AntennaDownlinkDemodDecodeConfig:
    r"""AntennaDownlinkDemodDecodeConfig
    Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
    """
    
    decode_config: DecodeConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decodeConfig') }})
    demodulation_config: DemodulationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('demodulationConfig') }})
    spectrum_config: SpectrumConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spectrumConfig') }})
    
