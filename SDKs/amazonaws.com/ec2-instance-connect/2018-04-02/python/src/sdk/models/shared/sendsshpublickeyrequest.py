from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendSSHPublicKeyRequest:
    availability_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    instance_os_user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceOSUser') }})
    ssh_public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSHPublicKey') }})
    
