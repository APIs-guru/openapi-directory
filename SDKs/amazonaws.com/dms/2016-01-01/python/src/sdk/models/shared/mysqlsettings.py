from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MySQLSettings:
    r"""MySQLSettings
    Provides information that defines a MySQL endpoint.
    """
    
    after_connect_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AfterConnectScript') }})
    clean_source_metadata_on_mismatch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CleanSourceMetadataOnMismatch') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    events_poll_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventsPollInterval') }})
    max_file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFileSize') }})
    parallel_load_threads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelLoadThreads') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerAccessRoleArn') }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerSecretId') }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    server_timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerTimezone') }})
    target_db_type: Optional[TargetDbTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetDbType') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
