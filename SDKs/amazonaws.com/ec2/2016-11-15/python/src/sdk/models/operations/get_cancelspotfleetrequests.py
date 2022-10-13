from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetCancelSpotFleetRequestsActionEnum(str, Enum):
    CANCEL_SPOT_FLEET_REQUESTS = "CancelSpotFleetRequests"

class GetCancelSpotFleetRequestsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCancelSpotFleetRequestsQueryParams:
    action: GetCancelSpotFleetRequestsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    spot_fleet_request_id: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'SpotFleetRequestId', 'style': 'form', 'explode': True }})
    terminate_instances: bool = field(default=None, metadata={'query_param': { 'field_name': 'TerminateInstances', 'style': 'form', 'explode': True }})
    version: GetCancelSpotFleetRequestsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCancelSpotFleetRequestsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCancelSpotFleetRequestsRequest:
    query_params: GetCancelSpotFleetRequestsQueryParams = field(default=None)
    headers: GetCancelSpotFleetRequestsHeaders = field(default=None)
    

@dataclass
class GetCancelSpotFleetRequestsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
