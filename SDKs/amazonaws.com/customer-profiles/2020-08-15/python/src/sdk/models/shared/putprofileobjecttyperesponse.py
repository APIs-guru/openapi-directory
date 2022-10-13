from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objecttypefield
from . import objecttypekey


@dataclass_json
@dataclass
class PutProfileObjectTypeResponse:
    allow_profile_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowProfileCreation' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionKey' }})
    expiration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDays' }})
    fields: Optional[dict[str, objecttypefield.ObjectTypeField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fields' }})
    keys: Optional[dict[str, List[objecttypekey.ObjectTypeKey]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectTypeName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateId' }})
    
