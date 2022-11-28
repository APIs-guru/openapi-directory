from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InitializationConfiguration:
    r"""InitializationConfiguration
    Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
    """
    
    disabled_on_initialization: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledOnInitialization') }})
    
