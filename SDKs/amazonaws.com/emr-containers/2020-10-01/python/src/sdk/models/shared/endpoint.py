from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configurationoverrides
from . import failurereason_enum
from . import endpointstate_enum


@dataclass_json
@dataclass
class Endpoint:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateArn' }})
    configuration_overrides: Optional[configurationoverrides.ConfigurationOverrides] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationOverrides' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    failure_reason: Optional[failurereason_enum.FailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseLabel' }})
    security_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroup' }})
    server_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverUrl' }})
    state: Optional[endpointstate_enum.EndpointStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateDetails' }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetIds' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    virtual_cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualClusterId' }})
    
