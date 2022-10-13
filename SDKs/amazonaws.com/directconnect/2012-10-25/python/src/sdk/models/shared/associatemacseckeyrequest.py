from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateMacSecKeyRequest:
    cak: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cak' }})
    ckn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ckn' }})
    connection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    secret_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretARN' }})
    
