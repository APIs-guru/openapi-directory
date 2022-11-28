from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartPhiDetectionJobRequest:
    data_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    input_data_config: InputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: LanguageCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKey') }})
    
