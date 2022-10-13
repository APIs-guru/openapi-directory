from dataclasses import dataclass, field
from typing import Enum,Optional

class PostAcceptReservedInstancesExchangeQuoteActionEnum(str, Enum):
    ACCEPT_RESERVED_INSTANCES_EXCHANGE_QUOTE = "AcceptReservedInstancesExchangeQuote"

class PostAcceptReservedInstancesExchangeQuoteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class PostAcceptReservedInstancesExchangeQuoteQueryParams:
    action: PostAcceptReservedInstancesExchangeQuoteActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostAcceptReservedInstancesExchangeQuoteVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAcceptReservedInstancesExchangeQuoteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class PostAcceptReservedInstancesExchangeQuoteRequest:
    query_params: PostAcceptReservedInstancesExchangeQuoteQueryParams = field(default=None)
    headers: PostAcceptReservedInstancesExchangeQuoteHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostAcceptReservedInstancesExchangeQuoteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
