from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entityrecognizerinputdataconfig
from . import languagecode_enum
from . import entityrecognizermetadata
from . import modelstatus_enum
from . import vpcconfig


@dataclass_json
@dataclass
class EntityRecognizerProperties:
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entity_recognizer_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityRecognizerArn' }})
    input_data_config: Optional[entityrecognizerinputdataconfig.EntityRecognizerInputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    model_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelKmsKeyId' }})
    recognizer_metadata: Optional[entityrecognizermetadata.EntityRecognizerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecognizerMetadata' }})
    status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
