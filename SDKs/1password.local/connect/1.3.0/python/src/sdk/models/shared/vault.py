from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VaultTypeEnum(str, Enum):
    USER_CREATED = "USER_CREATED"
    PERSONAL = "PERSONAL"
    EVERYONE = "EVERYONE"
    TRANSFER = "TRANSFER"


@dataclass_json
@dataclass
class Vault:
    attribute_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeVersion' }})
    content_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentVersion' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[VaultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
