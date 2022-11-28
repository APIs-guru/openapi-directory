from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutProfileObjectTypeResponse:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    object_type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectTypeName') }})
    allow_profile_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowProfileCreation') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionKey') }})
    expiration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDays') }})
    fields: Optional[dict[str, ObjectTypeField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fields') }})
    keys: Optional[dict[str, List[ObjectTypeKey]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateId') }})
    
