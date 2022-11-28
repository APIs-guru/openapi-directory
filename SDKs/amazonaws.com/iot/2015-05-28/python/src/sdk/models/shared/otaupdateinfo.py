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
class OtaUpdateInfo:
    r"""OtaUpdateInfo
    Information about an OTA update.
    """
    
    additional_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalParameters') }})
    aws_iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotJobArn') }})
    aws_iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIotJobId') }})
    aws_job_executions_rollout_config: Optional[AwsJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobExecutionsRolloutConfig') }})
    aws_job_presigned_url_config: Optional[AwsJobPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobPresignedUrlConfig') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_info: Optional[ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInfo') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ota_update_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateArn') }})
    ota_update_files: Optional[List[OtaUpdateFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateFiles') }})
    ota_update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateId') }})
    ota_update_status: Optional[OtaUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otaUpdateStatus') }})
    protocols: Optional[List[ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    target_selection: Optional[TargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSelection') }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
