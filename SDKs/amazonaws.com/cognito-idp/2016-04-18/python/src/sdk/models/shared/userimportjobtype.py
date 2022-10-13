from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userimportjobstatustype_enum


@dataclass_json
@dataclass
class UserImportJobType:
    cloud_watch_logs_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogsRoleArn' }})
    completion_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    completion_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionMessage' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedUsers' }})
    imported_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportedUsers' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    pre_signed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreSignedUrl' }})
    skipped_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SkippedUsers' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[userimportjobstatustype_enum.UserImportJobStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
