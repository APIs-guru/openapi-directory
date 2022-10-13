from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetDescribeServiceUpdatesActionEnum(str, Enum):
    DESCRIBE_SERVICE_UPDATES = "DescribeServiceUpdates"

class GetDescribeServiceUpdatesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetDescribeServiceUpdatesQueryParams:
    action: GetDescribeServiceUpdatesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    service_update_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateName', 'style': 'form', 'explode': True }})
    service_update_status: Optional[List[shared.ServiceUpdateStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ServiceUpdateStatus', 'style': 'form', 'explode': True }})
    version: GetDescribeServiceUpdatesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeServiceUpdatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeServiceUpdatesRequest:
    query_params: GetDescribeServiceUpdatesQueryParams = field(default=None)
    headers: GetDescribeServiceUpdatesHeaders = field(default=None)
    

@dataclass
class GetDescribeServiceUpdatesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
