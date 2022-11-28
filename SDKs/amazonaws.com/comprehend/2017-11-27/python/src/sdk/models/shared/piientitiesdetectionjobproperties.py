from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PiiEntitiesDetectionJobProperties:
    r"""PiiEntitiesDetectionJobProperties
    Provides information about a PII entities detection job.
    """
    
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: Optional[InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobArn') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_status: Optional[JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    mode: Optional[PiiEntitiesDetectionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    output_data_config: Optional[PiiOutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    redaction_config: Optional[RedactionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionConfig') }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmitTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
