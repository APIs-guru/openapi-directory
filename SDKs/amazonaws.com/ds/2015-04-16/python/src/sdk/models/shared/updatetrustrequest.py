from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import selectiveauth_enum


@dataclass_json
@dataclass
class UpdateTrustRequest:
    selective_auth: Optional[selectiveauth_enum.SelectiveAuthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectiveAuth' }})
    trust_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustId' }})
    
