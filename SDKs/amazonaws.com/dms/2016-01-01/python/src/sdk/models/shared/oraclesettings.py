from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import charlengthsemantics_enum


@dataclass_json
@dataclass
class OracleSettings:
    access_alternate_directly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessAlternateDirectly' }})
    add_supplemental_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddSupplementalLogging' }})
    additional_archived_log_dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalArchivedLogDestId' }})
    allow_select_nested_tables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowSelectNestedTables' }})
    archived_log_dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchivedLogDestId' }})
    archived_logs_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchivedLogsOnly' }})
    asm_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsmPassword' }})
    asm_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsmServer' }})
    asm_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AsmUser' }})
    char_length_semantics: Optional[charlengthsemantics_enum.CharLengthSemanticsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CharLengthSemantics' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    direct_path_no_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectPathNoLog' }})
    direct_path_parallel_load: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectPathParallelLoad' }})
    enable_homogenous_tablespace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableHomogenousTablespace' }})
    extra_archived_log_dest_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraArchivedLogDestIds' }})
    fail_tasks_on_lob_truncation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailTasksOnLobTruncation' }})
    number_datatype_scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberDatatypeScale' }})
    oracle_path_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OraclePathPrefix' }})
    parallel_asm_read_threads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelAsmReadThreads' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    read_ahead_blocks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadAheadBlocks' }})
    read_table_space_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadTableSpaceName' }})
    replace_path_prefix: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacePathPrefix' }})
    retry_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryInterval' }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerAccessRoleArn' }})
    secrets_manager_oracle_asm_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerOracleAsmAccessRoleArn' }})
    secrets_manager_oracle_asm_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerOracleAsmSecretId' }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerSecretId' }})
    security_db_encryption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityDbEncryption' }})
    security_db_encryption_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityDbEncryptionName' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    spatial_data_option_to_geo_json_function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpatialDataOptionToGeoJsonFunctionName' }})
    standby_delay_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandbyDelayTime' }})
    use_alternate_folder_for_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseAlternateFolderForOnline' }})
    use_b_file: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseBFile' }})
    use_direct_path_full_load: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseDirectPathFullLoad' }})
    use_logminer_reader: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseLogminerReader' }})
    use_path_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsePathPrefix' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
