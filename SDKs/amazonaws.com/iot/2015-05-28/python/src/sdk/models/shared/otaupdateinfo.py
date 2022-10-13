from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import awsjobexecutionsrolloutconfig
from . import awsjobpresignedurlconfig
from . import errorinfo
from . import otaupdatefile
from . import otaupdatestatus_enum
from . import protocol_enum
from . import targetselection_enum


@dataclass_json
@dataclass
class OtaUpdateInfo:
    additional_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalParameters' }})
    aws_iot_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotJobArn' }})
    aws_iot_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsIotJobId' }})
    aws_job_executions_rollout_config: Optional[awsjobexecutionsrolloutconfig.AwsJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsJobExecutionsRolloutConfig' }})
    aws_job_presigned_url_config: Optional[awsjobpresignedurlconfig.AwsJobPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsJobPresignedUrlConfig' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_info: Optional[errorinfo.ErrorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorInfo' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ota_update_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateArn' }})
    ota_update_files: Optional[List[otaupdatefile.OtaUpdateFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateFiles' }})
    ota_update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateId' }})
    ota_update_status: Optional[otaupdatestatus_enum.OtaUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otaUpdateStatus' }})
    protocols: Optional[List[protocol_enum.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    target_selection: Optional[targetselection_enum.TargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSelection' }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    
