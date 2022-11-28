from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AntennaUplinkConfig:
    r"""AntennaUplinkConfig
    Information about the uplink <code>Config</code> of an antenna.
    """
    
    spectrum_config: UplinkSpectrumConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spectrumConfig') }})
    target_eirp: Eirp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetEirp') }})
    transmit_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmitDisabled') }})
    
