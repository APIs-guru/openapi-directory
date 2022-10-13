from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetDeleteFleetsActionEnum(str, Enum):
    DELETE_FLEETS = "DeleteFleets"

class GetDeleteFleetsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteFleetsQueryParams:
    action: GetDeleteFleetsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    fleet_id: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'FleetId', 'style': 'form', 'explode': True }})
    terminate_instances: bool = field(default=None, metadata={'query_param': { 'field_name': 'TerminateInstances', 'style': 'form', 'explode': True }})
    version: GetDeleteFleetsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteFleetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDeleteFleetsRequest:
    query_params: GetDeleteFleetsQueryParams = field(default=None)
    headers: GetDeleteFleetsHeaders = field(default=None)
    

@dataclass
class GetDeleteFleetsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
