from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import restapi


@dataclass_json
@dataclass
class RestApis:
    items: Optional[List[restapi.RestAPI]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
