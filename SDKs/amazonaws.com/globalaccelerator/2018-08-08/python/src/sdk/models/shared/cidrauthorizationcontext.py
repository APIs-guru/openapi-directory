from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CidrAuthorizationContext:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signature' }})
    
