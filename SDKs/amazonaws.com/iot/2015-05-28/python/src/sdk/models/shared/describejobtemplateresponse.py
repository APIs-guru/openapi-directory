from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import abortconfig
from . import jobexecutionsrolloutconfig
from . import presignedurlconfig
from . import timeoutconfig


@dataclass_json
@dataclass
class DescribeJobTemplateResponse:
    abort_config: Optional[abortconfig.AbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    document_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSource' }})
    job_executions_rollout_config: Optional[jobexecutionsrolloutconfig.JobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    job_template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplateArn' }})
    job_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplateId' }})
    presigned_url_config: Optional[presignedurlconfig.PresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presignedUrlConfig' }})
    timeout_config: Optional[timeoutconfig.TimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    
