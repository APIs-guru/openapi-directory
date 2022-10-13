from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identitytype_enum


@dataclass_json
@dataclass
class SessionMappingDetail:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityName' }})
    identity_type: Optional[identitytype_enum.IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    session_policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionPolicyArn' }})
    studio_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioId' }})
    
