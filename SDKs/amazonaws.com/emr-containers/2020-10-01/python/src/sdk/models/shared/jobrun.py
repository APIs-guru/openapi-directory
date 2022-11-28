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
class JobRun:
    r"""JobRun
    This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    configuration_overrides: Optional[ConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationOverrides') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    failure_reason: Optional[FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    job_driver: Optional[JobDriver] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDriver') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseLabel') }})
    state: Optional[JobRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateDetails') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    virtual_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualClusterId') }})
    
