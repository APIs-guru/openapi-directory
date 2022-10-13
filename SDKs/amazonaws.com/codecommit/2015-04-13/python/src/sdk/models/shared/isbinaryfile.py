from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IsBinaryFile:
    base: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    destination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    source: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
