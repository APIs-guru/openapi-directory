from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import delegationstatus_enum


@dataclass_json
@dataclass
class DelegationMetadata:
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentId' }})
    assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentName' }})
    control_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSetName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    status: Optional[delegationstatus_enum.DelegationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
