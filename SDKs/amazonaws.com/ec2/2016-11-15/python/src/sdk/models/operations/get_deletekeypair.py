from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteKeyPairActionEnum(str, Enum):
    DELETE_KEY_PAIR = "DeleteKeyPair"

class GetDeleteKeyPairVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteKeyPairQueryParams:
    action: GetDeleteKeyPairActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    key_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'KeyName', 'style': 'form', 'explode': True }})
    key_pair_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'KeyPairId', 'style': 'form', 'explode': True }})
    version: GetDeleteKeyPairVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteKeyPairHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteKeyPairRequest:
    query_params: GetDeleteKeyPairQueryParams = field(default=None)
    headers: GetDeleteKeyPairHeaders = field(default=None)
    

@dataclass
class GetDeleteKeyPairResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
