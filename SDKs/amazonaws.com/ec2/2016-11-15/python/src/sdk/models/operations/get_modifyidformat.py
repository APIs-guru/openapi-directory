from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyIDFormatActionEnum(str, Enum):
    MODIFY_ID_FORMAT = "ModifyIdFormat"

class GetModifyIDFormatVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyIDFormatQueryParams:
    action: GetModifyIDFormatActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    resource: str = field(default=None, metadata={'query_param': { 'field_name': 'Resource', 'style': 'form', 'explode': True }})
    use_long_ids: bool = field(default=None, metadata={'query_param': { 'field_name': 'UseLongIds', 'style': 'form', 'explode': True }})
    version: GetModifyIDFormatVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyIDFormatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyIDFormatRequest:
    query_params: GetModifyIDFormatQueryParams = field(default=None)
    headers: GetModifyIDFormatHeaders = field(default=None)
    

@dataclass
class GetModifyIDFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
