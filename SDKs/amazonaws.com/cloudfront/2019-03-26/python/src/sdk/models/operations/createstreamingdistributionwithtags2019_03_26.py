from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateStreamingDistributionWithTags20190326QueryParams:
    with_tags: bool = field(default=None, metadata={'query_param': { 'field_name': 'WithTags', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateStreamingDistributionWithTags20190326Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class CreateStreamingDistributionWithTags20190326Request:
    query_params: CreateStreamingDistributionWithTags20190326QueryParams = field(default=None)
    headers: CreateStreamingDistributionWithTags20190326Headers = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class CreateStreamingDistributionWithTags20190326Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
