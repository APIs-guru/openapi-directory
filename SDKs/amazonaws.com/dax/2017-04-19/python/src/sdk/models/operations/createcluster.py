from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateClusterXAmzTargetEnum(str, Enum):
    AMAZON_DAXV3_CREATE_CLUSTER = "AmazonDAXV3.CreateCluster"


@dataclass
class CreateClusterHeaders:
    x_amz_target: CreateClusterXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateClusterRequest:
    headers: CreateClusterHeaders = field()
    request: shared.CreateClusterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateClusterResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_already_exists_fault: Optional[Any] = field(default=None)
    cluster_quota_for_customer_exceeded_fault: Optional[Any] = field(default=None)
    create_cluster_response: Optional[shared.CreateClusterResponse] = field(default=None)
    insufficient_cluster_capacity_fault: Optional[Any] = field(default=None)
    invalid_cluster_state_fault: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_group_state_fault: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    invalid_vpc_network_state_fault: Optional[Any] = field(default=None)
    node_quota_for_cluster_exceeded_fault: Optional[Any] = field(default=None)
    node_quota_for_customer_exceeded_fault: Optional[Any] = field(default=None)
    parameter_group_not_found_fault: Optional[Any] = field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    subnet_group_not_found_fault: Optional[Any] = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    
