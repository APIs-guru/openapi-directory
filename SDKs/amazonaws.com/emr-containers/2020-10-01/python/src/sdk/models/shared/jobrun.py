from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationoverrides
from . import failurereason_enum
from . import jobdriver
from . import jobrunstate_enum


@dataclass_json
@dataclass
class JobRun:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    configuration_overrides: Optional[configurationoverrides.ConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationOverrides' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    failure_reason: Optional[failurereason_enum.FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_driver: Optional[jobdriver.JobDriver] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDriver' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseLabel' }})
    state: Optional[jobrunstate_enum.JobRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateDetails' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    virtual_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualClusterId' }})
    
