from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateGlobalTableSettingsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_UPDATE_GLOBAL_TABLE_SETTINGS = "DynamoDB_20120810.UpdateGlobalTableSettings"


@dataclass
class UpdateGlobalTableSettingsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateGlobalTableSettingsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateGlobalTableSettingsRequest:
    headers: UpdateGlobalTableSettingsHeaders = field(default=None)
    request: shared.UpdateGlobalTableSettingsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGlobalTableSettingsResponse:
    content_type: str = field(default=None)
    global_table_not_found_exception: Optional[Any] = field(default=None)
    index_not_found_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    replica_not_found_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_global_table_settings_output: Optional[shared.UpdateGlobalTableSettingsOutput] = field(default=None)
    
