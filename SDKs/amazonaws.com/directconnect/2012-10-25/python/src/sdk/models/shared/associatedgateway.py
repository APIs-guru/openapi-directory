from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gatewaytype_enum


@dataclass_json
@dataclass
class AssociatedGateway:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    owner_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    type: Optional[gatewaytype_enum.GatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
