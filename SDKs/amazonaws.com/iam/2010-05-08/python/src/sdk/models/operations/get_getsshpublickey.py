from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetSSHPublicKeyActionEnum(str, Enum):
    GET_SSH_PUBLIC_KEY = "GetSSHPublicKey"

class GetGetSSHPublicKeyEncodingEnum(str, Enum):
    SSH = "SSH"
    PEM = "PEM"

class GetGetSSHPublicKeyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetGetSSHPublicKeyQueryParams:
    action: GetGetSSHPublicKeyActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    encoding: GetGetSSHPublicKeyEncodingEnum = field(default=None, metadata={'query_param': { 'field_name': 'Encoding', 'style': 'form', 'explode': True }})
    ssh_public_key_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SSHPublicKeyId', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetGetSSHPublicKeyVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetSSHPublicKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGetSSHPublicKeyRequest:
    query_params: GetGetSSHPublicKeyQueryParams = field(default=None)
    headers: GetGetSSHPublicKeyHeaders = field(default=None)
    

@dataclass
class GetGetSSHPublicKeyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
