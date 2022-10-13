from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entityrecognizerinputdataconfig
from . import languagecode_enum
from . import tag
from . import vpcconfig


@dataclass_json
@dataclass
class CreateEntityRecognizerRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    input_data_config: entityrecognizerinputdataconfig.EntityRecognizerInputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    model_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelKmsKeyId' }})
    recognizer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecognizerName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
