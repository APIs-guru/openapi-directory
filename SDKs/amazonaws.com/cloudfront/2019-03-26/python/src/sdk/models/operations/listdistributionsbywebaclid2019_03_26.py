from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListDistributionsByWebACLId20190326PathParams:
    web_acl_id: str = field(default=None, metadata={'path_param': { 'field_name': 'WebACLId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDistributionsByWebACLId20190326QueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDistributionsByWebACLId20190326Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListDistributionsByWebACLId20190326Request:
    path_params: ListDistributionsByWebACLId20190326PathParams = field(default=None)
    query_params: ListDistributionsByWebACLId20190326QueryParams = field(default=None)
    headers: ListDistributionsByWebACLId20190326Headers = field(default=None)
    

@dataclass
class ListDistributionsByWebACLId20190326Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
