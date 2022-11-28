from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeJobTemplateResponse:
    abort_config: Optional[AbortConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSource') }})
    job_executions_rollout_config: Optional[JobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    job_template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplateArn') }})
    job_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplateId') }})
    presigned_url_config: Optional[PresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presignedUrlConfig') }})
    timeout_config: Optional[TimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    
