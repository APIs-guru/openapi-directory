from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateTaskSetXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_UPDATE_TASK_SET = "AmazonEC2ContainerServiceV20141113.UpdateTaskSet"


@dataclass
class UpdateTaskSetHeaders:
    x_amz_target: UpdateTaskSetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskSetRequest:
    headers: UpdateTaskSetHeaders = field()
    request: shared.UpdateTaskSetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTaskSetResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_not_active_exception: Optional[Any] = field(default=None)
    service_not_found_exception: Optional[Any] = field(default=None)
    task_set_not_found_exception: Optional[Any] = field(default=None)
    unsupported_feature_exception: Optional[Any] = field(default=None)
    update_task_set_response: Optional[shared.UpdateTaskSetResponse] = field(default=None)
    
