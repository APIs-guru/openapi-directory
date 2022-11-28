from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Job:
    r"""Job
    The <code>Job</code> object contains details about a job.
    """
    
    abort_config: Optional[AbortConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    force_canceled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceCanceled') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_executions_rollout_config: Optional[JobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_process_details: Optional[JobProcessDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobProcessDetails') }})
    job_template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplateArn') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceId') }})
    presigned_url_config: Optional[PresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presignedUrlConfig') }})
    reason_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonCode') }})
    status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_selection: Optional[TargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSelection') }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    timeout_config: Optional[TimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    
