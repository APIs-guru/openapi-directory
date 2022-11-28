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
class ExportJobProperties:
    r"""ExportJobProperties
    The properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
    """
    
    datastore_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_status: JobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    submit_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmitTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
