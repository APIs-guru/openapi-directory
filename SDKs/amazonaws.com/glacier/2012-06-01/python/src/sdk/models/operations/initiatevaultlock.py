from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class InitiateVaultLockPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    vault_name: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultName', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateVaultLockHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class InitiateVaultLockRequestBodyPolicy:
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    

@dataclass_json
@dataclass
class InitiateVaultLockRequestBody:
    policy: Optional[InitiateVaultLockRequestBodyPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    

@dataclass
class InitiateVaultLockRequest:
    path_params: InitiateVaultLockPathParams = field(default=None)
    headers: InitiateVaultLockHeaders = field(default=None)
    request: InitiateVaultLockRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InitiateVaultLockResponse:
    content_type: str = field(default=None)
    initiate_vault_lock_output: Optional[dict[str, Any]] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    missing_parameter_value_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
