from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionmodevalue_enum


@dataclass_json
@dataclass
class RedshiftSettings:
    accept_any_date: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptAnyDate' }})
    after_connect_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AfterConnectScript' }})
    bucket_folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketFolder' }})
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketName' }})
    case_sensitive_names: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaseSensitiveNames' }})
    comp_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompUpdate' }})
    connection_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionTimeout' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatabaseName' }})
    date_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateFormat' }})
    empty_as_null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmptyAsNull' }})
    encryption_mode: Optional[encryptionmodevalue_enum.EncryptionModeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionMode' }})
    explicit_ids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExplicitIds' }})
    file_transfer_upload_streams: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileTransferUploadStreams' }})
    load_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadTimeout' }})
    max_file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFileSize' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    remove_quotes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveQuotes' }})
    replace_chars: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplaceChars' }})
    replace_invalid_chars: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplaceInvalidChars' }})
    secrets_manager_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerAccessRoleArn' }})
    secrets_manager_secret_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretsManagerSecretId' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    server_side_encryption_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideEncryptionKmsKeyId' }})
    service_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccessRoleArn' }})
    time_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeFormat' }})
    trim_blanks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrimBlanks' }})
    truncate_columns: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TruncateColumns' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    write_buffer_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteBufferSize' }})
    
