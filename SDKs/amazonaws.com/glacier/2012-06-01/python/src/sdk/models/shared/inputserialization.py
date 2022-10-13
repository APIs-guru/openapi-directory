from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import csvinput


@dataclass_json
@dataclass
class InputSerialization:
    csv: Optional[csvinput.CsvInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv' }})
    
