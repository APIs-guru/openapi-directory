from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileSizes:
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    destination: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
