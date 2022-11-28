from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObjectTypeKey:
    r"""ObjectTypeKey
    An object that defines the Key element of a ProfileObject. A Key is a special element that can be used to search for a customer profile.
    """
    
    field_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FieldNames') }})
    standard_identifiers: Optional[List[StandardIdentifierEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardIdentifiers') }})
    
