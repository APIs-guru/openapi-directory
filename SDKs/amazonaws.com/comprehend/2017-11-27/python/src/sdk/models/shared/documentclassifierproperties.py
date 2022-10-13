from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import classifiermetadata
from . import documentclassifierinputdataconfig
from . import languagecode_enum
from . import documentclassifiermode_enum
from . import documentclassifieroutputdataconfig
from . import modelstatus_enum
from . import vpcconfig


@dataclass_json
@dataclass
class DocumentClassifierProperties:
    classifier_metadata: Optional[classifiermetadata.ClassifierMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClassifierMetadata' }})
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    document_classifier_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassifierArn' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_data_config: Optional[documentclassifierinputdataconfig.DocumentClassifierInputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    mode: Optional[documentclassifiermode_enum.DocumentClassifierModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    model_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelKmsKeyId' }})
    output_data_config: Optional[documentclassifieroutputdataconfig.DocumentClassifierOutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    training_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
