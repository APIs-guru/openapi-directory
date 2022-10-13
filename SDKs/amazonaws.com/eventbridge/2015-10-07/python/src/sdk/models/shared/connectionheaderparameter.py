from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectionHeaderParameter:
    is_value_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsValueSecret' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
