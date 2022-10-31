from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyHostsActionEnum(str, Enum):
    MODIFY_HOSTS = "ModifyHosts"

class GetModifyHostsAutoPlacementEnum(str, Enum):
    ON = "on"
    OFF = "off"

class GetModifyHostsHostRecoveryEnum(str, Enum):
    ON = "on"
    OFF = "off"

class GetModifyHostsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyHostsQueryParams:
    action: GetModifyHostsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_placement: Optional[GetModifyHostsAutoPlacementEnum] = field(default=None, metadata={'query_param': { 'field_name': 'AutoPlacement', 'style': 'form', 'explode': True }})
    host_id: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'HostId', 'style': 'form', 'explode': True }})
    host_recovery: Optional[GetModifyHostsHostRecoveryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'HostRecovery', 'style': 'form', 'explode': True }})
    instance_family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceFamily', 'style': 'form', 'explode': True }})
    instance_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceType', 'style': 'form', 'explode': True }})
    version: GetModifyHostsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyHostsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyHostsRequest:
    query_params: GetModifyHostsQueryParams = field(default=None)
    headers: GetModifyHostsHeaders = field(default=None)
    

@dataclass
class GetModifyHostsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
