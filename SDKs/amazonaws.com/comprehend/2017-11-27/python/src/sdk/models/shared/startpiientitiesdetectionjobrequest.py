from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inputdataconfig
from . import languagecode_enum
from . import piientitiesdetectionmode_enum
from . import outputdataconfig
from . import redactionconfig
from . import tag


@dataclass_json
@dataclass
class StartPiiEntitiesDetectionJobRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    data_access_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobName' }})
    language_code: languagecode_enum.LanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    mode: piientitiesdetectionmode_enum.PiiEntitiesDetectionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    redaction_config: Optional[redactionconfig.RedactionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedactionConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
