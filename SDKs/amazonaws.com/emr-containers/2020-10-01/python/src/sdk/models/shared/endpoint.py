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
class Endpoint:
    r"""Endpoint
    This entity represents the endpoint that is managed by Amazon EMR on EKS.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    configuration_overrides: Optional[ConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationOverrides') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    failure_reason: Optional[FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseLabel') }})
    security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroup') }})
    server_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverUrl') }})
    state: Optional[EndpointStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateDetails') }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetIds') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    virtual_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualClusterId') }})
    
