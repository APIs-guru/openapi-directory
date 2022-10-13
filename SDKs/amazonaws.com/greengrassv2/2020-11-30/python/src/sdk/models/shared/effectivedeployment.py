from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import effectivedeploymentexecutionstatus_enum


@dataclass_json
@dataclass
class EffectiveDeployment:
    core_device_execution_status: effectivedeploymentexecutionstatus_enum.EffectiveDeploymentExecutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreDeviceExecutionStatus' }})
    creation_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    deployment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotJobArn' }})
    iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotJobId' }})
    modified_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    
