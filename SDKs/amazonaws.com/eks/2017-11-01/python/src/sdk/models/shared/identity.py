from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import oidc


@dataclass_json
@dataclass
class Identity:
    oidc: Optional[oidc.Oidc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidc' }})
    
