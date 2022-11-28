from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SendSSHPublicKeyXAmzTargetEnum(str, Enum):
    AWSEC2_INSTANCE_CONNECT_SERVICE_SEND_SSH_PUBLIC_KEY = "AWSEC2InstanceConnectService.SendSSHPublicKey"


@dataclass
class SendSSHPublicKeyHeaders:
    x_amz_target: SendSSHPublicKeyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendSSHPublicKeyRequest:
    headers: SendSSHPublicKeyHeaders = field()
    request: shared.SendSSHPublicKeyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendSSHPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    auth_exception: Optional[Any] = field(default=None)
    ec2_instance_not_found_exception: Optional[Any] = field(default=None)
    invalid_args_exception: Optional[Any] = field(default=None)
    send_ssh_public_key_response: Optional[shared.SendSSHPublicKeyResponse] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
