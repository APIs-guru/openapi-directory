from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchAssociateUserStackXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_BATCH_ASSOCIATE_USER_STACK = "PhotonAdminProxyService.BatchAssociateUserStack"


@dataclass
class BatchAssociateUserStackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: BatchAssociateUserStackXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class BatchAssociateUserStackRequest:
    headers: BatchAssociateUserStackHeaders = field(default=None)
    request: shared.BatchAssociateUserStackRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchAssociateUserStackResponse:
    batch_associate_user_stack_result: Optional[shared.BatchAssociateUserStackResult] = field(default=None)
    content_type: str = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
