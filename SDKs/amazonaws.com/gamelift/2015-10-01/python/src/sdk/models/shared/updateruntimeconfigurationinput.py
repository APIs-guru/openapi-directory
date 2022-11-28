from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRuntimeConfigurationInput:
    r"""UpdateRuntimeConfigurationInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    runtime_configuration: RuntimeConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuntimeConfiguration') }})
    
