from dataclasses import dataclass, field
from typing import Enum,Optional

class GetPutWarmPoolActionEnum(str, Enum):
    PUT_WARM_POOL = "PutWarmPool"

class GetPutWarmPoolPoolStateEnum(str, Enum):
    STOPPED = "Stopped"
    RUNNING = "Running"

class GetPutWarmPoolVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetPutWarmPoolQueryParams:
    action: GetPutWarmPoolActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    max_group_prepared_capacity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxGroupPreparedCapacity', 'style': 'form', 'explode': True }})
    min_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MinSize', 'style': 'form', 'explode': True }})
    pool_state: Optional[GetPutWarmPoolPoolStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'PoolState', 'style': 'form', 'explode': True }})
    version: GetPutWarmPoolVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutWarmPoolHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPutWarmPoolRequest:
    query_params: GetPutWarmPoolQueryParams = field(default=None)
    headers: GetPutWarmPoolHeaders = field(default=None)
    

@dataclass
class GetPutWarmPoolResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
