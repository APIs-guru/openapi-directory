from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSoftwareUpdateJobResponse:
    iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IotJobArn' }})
    iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IotJobId' }})
    platform_software_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformSoftwareVersion' }})
    
