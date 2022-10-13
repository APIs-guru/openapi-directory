from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharemethod_enum
from . import sharestatus_enum


@dataclass_json
@dataclass
class SharedDirectory:
    created_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerAccountId' }})
    owner_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerDirectoryId' }})
    share_method: Optional[sharemethod_enum.ShareMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareMethod' }})
    share_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareNotes' }})
    share_status: Optional[sharestatus_enum.ShareStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareStatus' }})
    shared_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedAccountId' }})
    shared_directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedDirectoryId' }})
    
