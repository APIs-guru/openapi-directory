from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import jobstatus_enum
from . import languagecode_enum
from . import outputdataconfig
from . import vpcconfig


@dataclass_json
@dataclass
class SentimentDetectionJobProperties:
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: Optional[inputdataconfig.InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobArn' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    job_status: Optional[jobstatus_enum.JobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobStatus' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    output_data_config: Optional[outputdataconfig.OutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
