from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lambdaeventsource
from . import lambdainputpayloadencodingtype_enum
from . import lambdalinuxprocessparams


@dataclass_json
@dataclass
class LambdaExecutionParameters:
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    event_sources: Optional[List[lambdaeventsource.LambdaEventSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSources' }})
    exec_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execArgs' }})
    input_payload_encoding_type: Optional[lambdainputpayloadencodingtype_enum.LambdaInputPayloadEncodingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputPayloadEncodingType' }})
    linux_process_params: Optional[lambdalinuxprocessparams.LambdaLinuxProcessParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxProcessParams' }})
    max_idle_time_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIdleTimeInSeconds' }})
    max_instances_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxInstancesCount' }})
    max_queue_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxQueueSize' }})
    pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinned' }})
    status_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusTimeoutInSeconds' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInSeconds' }})
    
