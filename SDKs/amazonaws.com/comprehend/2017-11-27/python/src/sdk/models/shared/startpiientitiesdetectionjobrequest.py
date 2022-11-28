from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartPiiEntitiesDetectionJobRequest:
    data_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    input_data_config: InputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: LanguageCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    mode: PiiEntitiesDetectionModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    redaction_config: Optional[RedactionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedactionConfig') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
