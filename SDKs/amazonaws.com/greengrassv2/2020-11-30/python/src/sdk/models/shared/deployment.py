from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentstatus_enum


@dataclass_json
@dataclass
class Deployment:
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    deployment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentName' }})
    deployment_status: Optional[deploymentstatus_enum.DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatus' }})
    is_latest_for_target: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLatestForTarget' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    
