from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accesslog


@dataclass_json
@dataclass
class Logging:
    access_log: Optional[accesslog.AccessLog] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLog' }})
    
