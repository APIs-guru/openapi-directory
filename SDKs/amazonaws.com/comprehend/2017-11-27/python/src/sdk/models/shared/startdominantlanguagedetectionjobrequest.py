from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartDominantLanguageDetectionJobRequest:
    data_access_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataAccessRoleArn') }})
    input_data_config: InputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeKmsKeyId') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfig') }})
    
