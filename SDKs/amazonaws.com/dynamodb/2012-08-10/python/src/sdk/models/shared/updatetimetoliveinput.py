from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTimeToLiveInput:
    r"""UpdateTimeToLiveInput
    Represents the input of an <code>UpdateTimeToLive</code> operation.
    """
    
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    time_to_live_specification: TimeToLiveSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLiveSpecification') }})
    
