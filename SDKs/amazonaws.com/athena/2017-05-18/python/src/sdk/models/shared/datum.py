from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Datum:
    r"""Datum
    A piece of data (a field in the table).
    """
    
    var_char_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VarCharValue') }})
    
