from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assessmentreportstatus_enum


@dataclass_json
@dataclass
class AssessmentReport:
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentId' }})
    assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentName' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsAccountId' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[assessmentreportstatus_enum.AssessmentReportStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
