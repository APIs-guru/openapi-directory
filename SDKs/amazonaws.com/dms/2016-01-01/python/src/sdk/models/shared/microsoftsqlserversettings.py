from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MicrosoftSQLServerSettings:
    r"""MicrosoftSQLServerSettings
    Provides information that defines a Microsoft SQL Server endpoint.
    """
    
    bcp_packet_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BcpPacketSize') }})
    control_tables_file_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ControlTablesFileGroup') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseName') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Port') }})
    query_single_always_on_node: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuerySingleAlwaysOnNode') }})
    read_backup_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadBackupOnly') }})
    safeguard_policy: Optional[SafeguardPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafeguardPolicy') }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerAccessRoleArn') }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretsManagerSecretId') }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerName') }})
    use_bcp_full_load: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseBcpFullLoad') }})
    use_third_party_backup_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseThirdPartyBackupDevice') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
