from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateApplicationInput:
    r"""UpdateApplicationInput
    Represents the input of an <code>UpdateApplication</code> operation.
    """
    
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    new_application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newApplicationName') }})
    
