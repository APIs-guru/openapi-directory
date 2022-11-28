from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VaultTypeEnum(str, Enum):
    USER_CREATED = "USER_CREATED"
    PERSONAL = "PERSONAL"
    EVERYONE = "EVERYONE"
    TRANSFER = "TRANSFER"


@dataclass_json
@dataclass
class Vault:
    attribute_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeVersion') }})
    content_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[VaultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
