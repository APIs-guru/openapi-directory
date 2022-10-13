from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Error:
    code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
