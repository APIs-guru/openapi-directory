from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRemoteAccessSessionRequest:
    r"""CreateRemoteAccessSessionRequest
    Creates and submits a request to start a remote access session.
    """
    
    device_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceArn') }})
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    configuration: Optional[CreateRemoteAccessSessionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceArn') }})
    interaction_mode: Optional[InteractionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactionMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remote_debug_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteDebugEnabled') }})
    remote_record_app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteRecordAppArn') }})
    remote_record_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteRecordEnabled') }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipAppResign') }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKey') }})
    
