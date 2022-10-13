from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentstatus_enum


@dataclass_json
@dataclass
class CreateDeploymentResponse:
    auto_deployed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoDeployed' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    deployment_status: Optional[deploymentstatus_enum.DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentStatus' }})
    deployment_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentStatusMessage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    
