from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateContainerInstancesStateXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_CONTAINER_INSTANCES_STATE = "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState"


@dataclass
class UpdateContainerInstancesStateHeaders:
    x_amz_target: UpdateContainerInstancesStateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateContainerInstancesStateRequest:
    headers: UpdateContainerInstancesStateHeaders = field()
    request: shared.UpdateContainerInstancesStateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateContainerInstancesStateResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    update_container_instances_state_response: Optional[shared.UpdateContainerInstancesStateResponse] = field(default=None)
    
