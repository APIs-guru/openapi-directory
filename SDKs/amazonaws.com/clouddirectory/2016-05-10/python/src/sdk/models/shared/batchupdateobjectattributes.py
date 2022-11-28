from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdateObjectAttributes:
    r"""BatchUpdateObjectAttributes
    Represents the output of a <code>BatchUpdate</code> operation. 
    """
    
    attribute_updates: List[ObjectAttributeUpdate] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    object_reference: ObjectReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    
