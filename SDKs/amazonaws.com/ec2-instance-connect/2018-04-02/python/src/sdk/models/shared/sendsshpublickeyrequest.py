from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendSSHPublicKeyRequest:
    availability_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    instance_os_user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceOSUser' }})
    ssh_public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSHPublicKey' }})
    
