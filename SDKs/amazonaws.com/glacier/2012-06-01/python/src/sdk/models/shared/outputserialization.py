from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import csvoutput


@dataclass_json
@dataclass
class OutputSerialization:
    csv: Optional[csvoutput.CsvOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv' }})
    
