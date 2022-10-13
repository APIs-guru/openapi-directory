from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import update


@dataclass_json
@dataclass
class DisassociateIdentityProviderConfigResponse:
    update: Optional[update.Update] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update' }})
    
