from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TLSConfig:
    server_name_to_verify: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerNameToVerify' }})
    
