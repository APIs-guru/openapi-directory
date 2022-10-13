from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httpauthorization
from . import httpactionheader


@dataclass_json
@dataclass
class HTTPAction:
    auth: Optional[httpauthorization.HTTPAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    confirmation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmationUrl' }})
    headers: Optional[List[httpactionheader.HTTPActionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
