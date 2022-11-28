from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CellInput:
    r"""CellInput
     CellInput object contains the data needed to create or update cells in a table. 
    """
    
    fact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fact') }})
    
