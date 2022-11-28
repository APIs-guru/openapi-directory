from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AntennaDownlinkConfig:
    r"""AntennaDownlinkConfig
    Information about how AWS Ground Station should configure an antenna for downlink during a contact.
    """
    
    spectrum_config: SpectrumConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spectrumConfig') }})
    
