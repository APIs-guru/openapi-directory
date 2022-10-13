from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import abortconfig
from . import jobexecutionsrolloutconfig
from . import jobprocessdetails
from . import presignedurlconfig
from . import jobstatus_enum
from . import targetselection_enum
from . import timeoutconfig


@dataclass_json
@dataclass
class Job:
    abort_config: Optional[abortconfig.AbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    force_canceled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceCanceled' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_executions_rollout_config: Optional[jobexecutionsrolloutconfig.JobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    job_process_details: Optional[jobprocessdetails.JobProcessDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobProcessDetails' }})
    job_template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplateArn' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceId' }})
    presigned_url_config: Optional[presignedurlconfig.PresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presignedUrlConfig' }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonCode' }})
    status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_selection: Optional[targetselection_enum.TargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSelection' }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    timeout_config: Optional[timeoutconfig.TimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    
