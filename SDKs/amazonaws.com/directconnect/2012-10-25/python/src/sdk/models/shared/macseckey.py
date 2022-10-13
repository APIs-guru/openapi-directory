from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MacSecKey:
    ckn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ckn' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretARN' }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startOn' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
