from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AddIPRoutesXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_ADD_IP_ROUTES = "DirectoryService_20150416.AddIpRoutes"


@dataclass
class AddIPRoutesHeaders:
    x_amz_target: AddIPRoutesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddIPRoutesRequest:
    headers: AddIPRoutesHeaders = field()
    request: shared.AddIPRoutesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddIPRoutesResponse:
    content_type: str = field()
    status_code: int = field()
    add_ip_routes_result: Optional[dict[str, Any]] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    entity_already_exists_exception: Optional[Any] = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    ip_route_limit_exceeded_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    
