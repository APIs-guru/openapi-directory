from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteClusterXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_DELETE_CLUSTER = "AmazonEC2ContainerServiceV20141113.DeleteCluster"


@dataclass
class DeleteClusterHeaders:
    x_amz_target: DeleteClusterXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteClusterRequest:
    headers: DeleteClusterHeaders = field()
    request: shared.DeleteClusterRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteClusterResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    cluster_contains_container_instances_exception: Optional[Any] = field(default=None)
    cluster_contains_services_exception: Optional[Any] = field(default=None)
    cluster_contains_tasks_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    delete_cluster_response: Optional[shared.DeleteClusterResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    update_in_progress_exception: Optional[Any] = field(default=None)
    
