from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUploadSSHPublicKeyActionEnum(str, Enum):
    UPLOAD_SSH_PUBLIC_KEY = "UploadSSHPublicKey"

class GetUploadSSHPublicKeyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUploadSSHPublicKeyQueryParams:
    action: GetUploadSSHPublicKeyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    ssh_public_key_body: str = field(metadata={'query_param': { 'field_name': 'SSHPublicKeyBody', 'style': 'form', 'explode': True }})
    user_name: str = field(metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetUploadSSHPublicKeyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUploadSSHPublicKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUploadSSHPublicKeyRequest:
    headers: GetUploadSSHPublicKeyHeaders = field()
    query_params: GetUploadSSHPublicKeyQueryParams = field()
    

@dataclass
class GetUploadSSHPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
