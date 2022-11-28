from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLocationObjectStorageRequest:
    r"""CreateLocationObjectStorageRequest
    CreateLocationObjectStorageRequest
    """
    
    agent_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    server_hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerHostname') }})
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessKey') }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretKey') }})
    server_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerPort') }})
    server_protocol: Optional[ObjectStorageServerProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerProtocol') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
