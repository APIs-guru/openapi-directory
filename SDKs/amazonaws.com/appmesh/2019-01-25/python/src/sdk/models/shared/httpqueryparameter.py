from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryparametermatch


@dataclass_json
@dataclass
class HTTPQueryParameter:
    match: Optional[queryparametermatch.QueryParameterMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
