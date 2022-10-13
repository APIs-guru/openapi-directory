from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pluginnamevalue_enum


@dataclass_json
@dataclass
class PostgreSQLSettings:
    after_connect_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AfterConnectScript' }})
    capture_ddls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureDdls' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    ddl_artifacts_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DdlArtifactsSchema' }})
    execute_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecuteTimeout' }})
    fail_tasks_on_lob_truncation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailTasksOnLobTruncation' }})
    heartbeat_enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeartbeatEnable' }})
    heartbeat_frequency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeartbeatFrequency' }})
    heartbeat_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HeartbeatSchema' }})
    max_file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFileSize' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    plugin_name: Optional[pluginnamevalue_enum.PluginNameValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PluginName' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerAccessRoleArn' }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerSecretId' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    slot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SlotName' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
