from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute


@dataclass_json
@dataclass
class Computer:
    computer_attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputerAttributes' }})
    computer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputerId' }})
    computer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputerName' }})
    
