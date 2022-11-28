from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListDiscoveredResourcesQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListDiscoveredResourcesXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_LIST_DISCOVERED_RESOURCES = "StarlingDoveService.ListDiscoveredResources"


@dataclass
class ListDiscoveredResourcesHeaders:
    x_amz_target: ListDiscoveredResourcesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDiscoveredResourcesRequest:
    headers: ListDiscoveredResourcesHeaders = field()
    query_params: ListDiscoveredResourcesQueryParams = field()
    request: shared.ListDiscoveredResourcesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListDiscoveredResourcesResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_limit_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    list_discovered_resources_response: Optional[shared.ListDiscoveredResourcesResponse] = field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
