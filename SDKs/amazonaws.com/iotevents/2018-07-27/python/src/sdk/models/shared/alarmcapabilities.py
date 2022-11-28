from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlarmCapabilities:
    r"""AlarmCapabilities
    Contains the configuration information of alarm state changes.
    """
    
    acknowledge_flow: Optional[AcknowledgeFlow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeFlow') }})
    initialization_configuration: Optional[InitializationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializationConfiguration') }})
    
