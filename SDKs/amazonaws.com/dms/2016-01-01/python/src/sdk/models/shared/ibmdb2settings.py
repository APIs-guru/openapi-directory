from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IbmDb2Settings:
    current_lsn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentLsn' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    max_k_bytes_per_read: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxKBytesPerRead' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerAccessRoleArn' }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerSecretId' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    set_data_capture_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SetDataCaptureChanges' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
