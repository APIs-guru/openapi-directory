from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import selectiveauth_enum
from . import trustdirection_enum
from . import truststate_enum
from . import trusttype_enum


@dataclass_json
@dataclass
class Trust:
    created_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    remote_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteDomainName' }})
    selective_auth: Optional[selectiveauth_enum.SelectiveAuthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectiveAuth' }})
    state_last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateLastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trust_direction: Optional[trustdirection_enum.TrustDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustDirection' }})
    trust_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustId' }})
    trust_state: Optional[truststate_enum.TrustStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustState' }})
    trust_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustStateReason' }})
    trust_type: Optional[trusttype_enum.TrustTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustType' }})
    
