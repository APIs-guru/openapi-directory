from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostUploadSSHPublicKeyActionEnum(str, Enum):
    UPLOAD_SSH_PUBLIC_KEY = "UploadSSHPublicKey"

class PostUploadSSHPublicKeyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class PostUploadSSHPublicKeyQueryParams:
    action: PostUploadSSHPublicKeyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostUploadSSHPublicKeyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUploadSSHPublicKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUploadSSHPublicKeyRequest:
    headers: PostUploadSSHPublicKeyHeaders = field()
    query_params: PostUploadSSHPublicKeyQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostUploadSSHPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
