from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apikey


@dataclass_json
@dataclass
class APIKeys:
    items: Optional[List[apikey.APIKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    warnings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
