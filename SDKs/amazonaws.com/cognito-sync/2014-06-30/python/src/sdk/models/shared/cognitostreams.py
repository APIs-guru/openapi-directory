from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CognitoStreams:
    r"""CognitoStreams
    Configuration options for configure Cognito streams.
    """
    
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    streaming_status: Optional[StreamingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamingStatus') }})
    
