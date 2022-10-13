from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import roletype_enum
from . import delegationstatus_enum


@dataclass_json
@dataclass
class Delegation:
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentId' }})
    assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentName' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    control_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSetId' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    role_type: Optional[roletype_enum.RoleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleType' }})
    status: Optional[delegationstatus_enum.DelegationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
