from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentityPoolUsage:
    data_storage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataStorage' }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sync_sessions_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncSessionsCount' }})
    
