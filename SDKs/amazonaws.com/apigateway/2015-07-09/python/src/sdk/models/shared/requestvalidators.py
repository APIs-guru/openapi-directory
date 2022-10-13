from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import requestvalidator


@dataclass_json
@dataclass
class RequestValidators:
    items: Optional[List[requestvalidator.RequestValidator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
