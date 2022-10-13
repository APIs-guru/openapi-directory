from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetUpdateScalingParametersActionEnum(str, Enum):
    UPDATE_SCALING_PARAMETERS = "UpdateScalingParameters"


@dataclass
class GetUpdateScalingParametersScalingParameters:
    desired_instance_type: Optional[shared.PartitionInstanceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredInstanceType' }})
    desired_partition_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredPartitionCount' }})
    desired_replication_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredReplicationCount' }})
    
class GetUpdateScalingParametersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclass
class GetUpdateScalingParametersQueryParams:
    action: GetUpdateScalingParametersActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    scaling_parameters: GetUpdateScalingParametersScalingParameters = field(default=None, metadata={'query_param': { 'field_name': 'ScalingParameters', 'style': 'form', 'explode': True }})
    version: GetUpdateScalingParametersVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateScalingParametersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetUpdateScalingParametersRequest:
    query_params: GetUpdateScalingParametersQueryParams = field(default=None)
    headers: GetUpdateScalingParametersHeaders = field(default=None)
    

@dataclass
class GetUpdateScalingParametersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
