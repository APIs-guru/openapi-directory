from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyInstancePlacementActionEnum(str, Enum):
    MODIFY_INSTANCE_PLACEMENT = "ModifyInstancePlacement"

class GetModifyInstancePlacementAffinityEnum(str, Enum):
    DEFAULT = "default"
    HOST = "host"

class GetModifyInstancePlacementTenancyEnum(str, Enum):
    DEDICATED = "dedicated"
    HOST = "host"

class GetModifyInstancePlacementVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyInstancePlacementQueryParams:
    action: GetModifyInstancePlacementActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    affinity: Optional[GetModifyInstancePlacementAffinityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Affinity', 'style': 'form', 'explode': True }})
    group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GroupName', 'style': 'form', 'explode': True }})
    host_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HostId', 'style': 'form', 'explode': True }})
    host_resource_group_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'HostResourceGroupArn', 'style': 'form', 'explode': True }})
    instance_id: str = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    partition_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PartitionNumber', 'style': 'form', 'explode': True }})
    tenancy: Optional[GetModifyInstancePlacementTenancyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Tenancy', 'style': 'form', 'explode': True }})
    version: GetModifyInstancePlacementVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyInstancePlacementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyInstancePlacementRequest:
    query_params: GetModifyInstancePlacementQueryParams = field(default=None)
    headers: GetModifyInstancePlacementHeaders = field(default=None)
    

@dataclass
class GetModifyInstancePlacementResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
