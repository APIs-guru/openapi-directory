from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import otaupdatestatus_enum


@dataclass_json
@dataclass
class CreateOtaUpdateResponse:
    aws_iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotJobArn' }})
    aws_iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotJobId' }})
    ota_update_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateArn' }})
    ota_update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateId' }})
    ota_update_status: Optional[otaupdatestatus_enum.OtaUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateStatus' }})
    
