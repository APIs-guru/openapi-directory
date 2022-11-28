from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateTaskSetXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_TASK_SET = "AmazonEC2ContainerServiceV20141113.CreateTaskSet"


@dataclass
class CreateTaskSetHeaders:
    x_amz_target: CreateTaskSetXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTaskSetRequest:
    headers: CreateTaskSetHeaders = field()
    request: shared.CreateTaskSetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTaskSetResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    create_task_set_response: Optional[shared.CreateTaskSetResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    platform_task_definition_incompatibility_exception: Optional[Any] = field(default=None)
    platform_unknown_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    service_not_active_exception: Optional[Any] = field(default=None)
    service_not_found_exception: Optional[Any] = field(default=None)
    unsupported_feature_exception: Optional[Any] = field(default=None)
    
