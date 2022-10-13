from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import createremoteaccesssessionconfiguration
from . import interactionmode_enum


@dataclass_json
@dataclass
class CreateRemoteAccessSessionRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    configuration: Optional[createremoteaccesssessionconfiguration.CreateRemoteAccessSessionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    device_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceArn' }})
    instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceArn' }})
    interaction_mode: Optional[interactionmode_enum.InteractionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactionMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    remote_debug_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteDebugEnabled' }})
    remote_record_app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteRecordAppArn' }})
    remote_record_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteRecordEnabled' }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipAppResign' }})
    ssh_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshPublicKey' }})
    
