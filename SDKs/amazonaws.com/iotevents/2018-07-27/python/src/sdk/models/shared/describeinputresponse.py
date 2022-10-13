from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import input


@dataclass_json
@dataclass
class DescribeInputResponse:
    input: Optional[input.Input] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    
