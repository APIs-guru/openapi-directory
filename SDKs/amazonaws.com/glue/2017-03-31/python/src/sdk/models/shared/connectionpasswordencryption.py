from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectionPasswordEncryption:
    aws_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsKmsKeyId' }})
    return_connection_password_encrypted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReturnConnectionPasswordEncrypted' }})
    
