from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetEnterStandbyActionEnum(str, Enum):
    ENTER_STANDBY = "EnterStandby"

class GetEnterStandbyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetEnterStandbyQueryParams:
    action: GetEnterStandbyActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    instance_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceIds', 'style': 'form', 'explode': True }})
    should_decrement_desired_capacity: bool = field(default=None, metadata={'query_param': { 'field_name': 'ShouldDecrementDesiredCapacity', 'style': 'form', 'explode': True }})
    version: GetEnterStandbyVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEnterStandbyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetEnterStandbyRequest:
    query_params: GetEnterStandbyQueryParams = field(default=None)
    headers: GetEnterStandbyHeaders = field(default=None)
    

@dataclass
class GetEnterStandbyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
