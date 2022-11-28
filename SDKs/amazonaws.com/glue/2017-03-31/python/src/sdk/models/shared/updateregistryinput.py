from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRegistryInput:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    registry_id: RegistryID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistryId') }})
    
