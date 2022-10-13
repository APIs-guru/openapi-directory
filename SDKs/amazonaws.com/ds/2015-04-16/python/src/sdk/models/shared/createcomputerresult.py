from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import computer


@dataclass_json
@dataclass
class CreateComputerResult:
    computer: Optional[computer.Computer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Computer' }})
    
