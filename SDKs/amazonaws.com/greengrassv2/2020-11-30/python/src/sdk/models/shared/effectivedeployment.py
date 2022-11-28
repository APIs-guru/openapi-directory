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
class EffectiveDeployment:
    r"""EffectiveDeployment
    Contains information about a deployment job that IoT Greengrass sends to a Greengrass core device.
    """
    
    core_device_execution_status: EffectiveDeploymentExecutionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coreDeviceExecutionStatus') }})
    creation_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    deployment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentName') }})
    modified_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    target_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobArn') }})
    iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotJobId') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
