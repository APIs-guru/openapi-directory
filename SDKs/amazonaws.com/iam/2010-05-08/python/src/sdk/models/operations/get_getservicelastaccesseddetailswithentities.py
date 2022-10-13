from dataclasses import dataclass, field
from typing import Enum,Optional

class GetGetServiceLastAccessedDetailsWithEntitiesActionEnum(str, Enum):
    GET_SERVICE_LAST_ACCESSED_DETAILS_WITH_ENTITIES = "GetServiceLastAccessedDetailsWithEntities"

class GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetGetServiceLastAccessedDetailsWithEntitiesQueryParams:
    action: GetGetServiceLastAccessedDetailsWithEntitiesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    job_id: str = field(default=None, metadata={'query_param': { 'field_name': 'JobId', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    service_namespace: str = field(default=None, metadata={'query_param': { 'field_name': 'ServiceNamespace', 'style': 'form', 'explode': True }})
    version: GetGetServiceLastAccessedDetailsWithEntitiesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetServiceLastAccessedDetailsWithEntitiesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGetServiceLastAccessedDetailsWithEntitiesRequest:
    query_params: GetGetServiceLastAccessedDetailsWithEntitiesQueryParams = field(default=None)
    headers: GetGetServiceLastAccessedDetailsWithEntitiesHeaders = field(default=None)
    

@dataclass
class GetGetServiceLastAccessedDetailsWithEntitiesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
