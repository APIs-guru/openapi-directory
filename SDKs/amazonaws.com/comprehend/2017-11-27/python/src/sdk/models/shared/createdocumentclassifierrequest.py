from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import documentclassifierinputdataconfig
from . import languagecode_enum
from . import documentclassifiermode_enum
from . import documentclassifieroutputdataconfig
from . import tag
from . import vpcconfig


@dataclass_json
@dataclass
class CreateDocumentClassifierRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    document_classifier_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassifierName' }})
    input_data_config: documentclassifierinputdataconfig.DocumentClassifierInputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    mode: Optional[documentclassifiermode_enum.DocumentClassifierModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    model_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelKmsKeyId' }})
    output_data_config: Optional[documentclassifieroutputdataconfig.DocumentClassifierOutputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
