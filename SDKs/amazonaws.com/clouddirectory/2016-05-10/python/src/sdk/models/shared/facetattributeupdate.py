from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FacetAttributeUpdate:
    r"""FacetAttributeUpdate
    A structure that contains information used to update an attribute.
    """
    
    action: Optional[UpdateActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    attribute: Optional[FacetAttribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    
