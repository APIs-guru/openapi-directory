from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Elevation:
    r"""Elevation
    Elevation angle of the satellite in the sky during a contact.
    """
    
    unit: AngleUnitsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
