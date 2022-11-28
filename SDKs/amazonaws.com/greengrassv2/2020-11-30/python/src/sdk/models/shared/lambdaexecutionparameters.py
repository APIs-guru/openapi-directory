from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaExecutionParameters:
    r"""LambdaExecutionParameters
    Contains parameters for a Lambda function that runs on IoT Greengrass.
    """
    
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    event_sources: Optional[List[LambdaEventSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSources') }})
    exec_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execArgs') }})
    input_payload_encoding_type: Optional[LambdaInputPayloadEncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputPayloadEncodingType') }})
    linux_process_params: Optional[LambdaLinuxProcessParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxProcessParams') }})
    max_idle_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdleTimeInSeconds') }})
    max_instances_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstancesCount') }})
    max_queue_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxQueueSize') }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinned') }})
    status_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusTimeoutInSeconds') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    
