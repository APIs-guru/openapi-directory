from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateListenerXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_CREATE_LISTENER = "GlobalAccelerator_V20180706.CreateListener"


@dataclass
class CreateListenerHeaders:
    x_amz_target: CreateListenerXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateListenerRequest:
    headers: CreateListenerHeaders = field()
    request: shared.CreateListenerRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateListenerResponse:
    content_type: str = field()
    status_code: int = field()
    accelerator_not_found_exception: Optional[Any] = field(default=None)
    create_listener_response: Optional[shared.CreateListenerResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_port_range_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    
