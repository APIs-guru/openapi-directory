from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendSerialConsoleSSHPublicKeyRequest:
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    ssh_public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSHPublicKey' }})
    serial_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SerialPort' }})
    
