from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputSerialization:
    r"""InputSerialization
    Describes how the archive is serialized.
    """
    
    csv: Optional[CsvInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv') }})
    
