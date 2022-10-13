from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendSSHPublicKeyXAmzTargetEnum(str, Enum):
    AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SSH_PUBLIC_KEY = "AWSEC2InstanceConnectService.SendSSHPublicKey"


@dataclass
class SendSSHPublicKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SendSSHPublicKeyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SendSSHPublicKeyRequest:
    headers: SendSSHPublicKeyHeaders = field(default=None)
    request: shared.SendSSHPublicKeyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendSSHPublicKeyResponse:
    auth_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    ec2_instance_not_found_exception: Optional[Any] = field(default=None)
    invalid_args_exception: Optional[Any] = field(default=None)
    send_ssh_public_key_response: Optional[shared.SendSSHPublicKeyResponse] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
