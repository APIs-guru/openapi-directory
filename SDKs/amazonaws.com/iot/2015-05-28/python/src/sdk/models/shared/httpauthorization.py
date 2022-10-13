from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sigv4authorization


@dataclass_json
@dataclass
class HTTPAuthorization:
    sigv4: Optional[sigv4authorization.SigV4Authorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sigv4' }})
    
