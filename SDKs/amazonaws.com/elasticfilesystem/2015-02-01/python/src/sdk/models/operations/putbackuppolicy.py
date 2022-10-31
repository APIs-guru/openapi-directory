from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutBackupPolicyPathParams:
    file_system_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutBackupPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutBackupPolicyRequestBodyBackupPolicy:
    status: Optional[shared.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    

@dataclass_json
@dataclass
class PutBackupPolicyRequestBody:
    backup_policy: PutBackupPolicyRequestBodyBackupPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupPolicy' }})
    

@dataclass
class PutBackupPolicyRequest:
    path_params: PutBackupPolicyPathParams = field(default=None)
    headers: PutBackupPolicyHeaders = field(default=None)
    request: PutBackupPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutBackupPolicyResponse:
    backup_policy_description: Optional[shared.BackupPolicyDescription] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
