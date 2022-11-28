from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetUpdateScalingParametersActionEnum(str, Enum):
    UPDATE_SCALING_PARAMETERS = "UpdateScalingParameters"


@dataclass
class GetUpdateScalingParametersScalingParameters:
    r"""GetUpdateScalingParametersScalingParameters
    The desired instance type and desired number of replicas of each index partition.
    """
    
    desired_instance_type: Optional[shared.PartitionInstanceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredInstanceType' }})
    desired_partition_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredPartitionCount' }})
    desired_replication_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredReplicationCount' }})
    
class GetUpdateScalingParametersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_01 = "2013-01-01"


@dataclass
class GetUpdateScalingParametersQueryParams:
    action: GetUpdateScalingParametersActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    scaling_parameters: GetUpdateScalingParametersScalingParameters = field(metadata={'query_param': { 'field_name': 'ScalingParameters', 'style': 'form', 'explode': True }})
    version: GetUpdateScalingParametersVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateScalingParametersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateScalingParametersRequest:
    headers: GetUpdateScalingParametersHeaders = field()
    query_params: GetUpdateScalingParametersQueryParams = field()
    

@dataclass
class GetUpdateScalingParametersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
