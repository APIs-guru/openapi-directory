from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Cors:
    allow_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowCredentials' }})
    allow_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowHeaders' }})
    allow_methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowMethods' }})
    allow_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowOrigins' }})
    expose_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExposeHeaders' }})
    max_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAge' }})
    
