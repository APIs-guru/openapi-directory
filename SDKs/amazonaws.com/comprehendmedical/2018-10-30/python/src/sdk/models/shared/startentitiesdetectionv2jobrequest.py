from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import languagecode_enum
from . import outputdataconfig


@dataclass_json
@dataclass
class StartEntitiesDetectionV2JobRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKey' }})
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    
