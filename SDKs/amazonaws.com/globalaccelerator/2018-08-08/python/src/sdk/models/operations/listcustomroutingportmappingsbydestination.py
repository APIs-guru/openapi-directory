from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListCustomRoutingPortMappingsByDestinationQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_PORT_MAPPINGS_BY_DESTINATION = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination"


@dataclass
class ListCustomRoutingPortMappingsByDestinationHeaders:
    x_amz_target: ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCustomRoutingPortMappingsByDestinationRequest:
    headers: ListCustomRoutingPortMappingsByDestinationHeaders = field()
    query_params: ListCustomRoutingPortMappingsByDestinationQueryParams = field()
    request: shared.ListCustomRoutingPortMappingsByDestinationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListCustomRoutingPortMappingsByDestinationResponse:
    content_type: str = field()
    status_code: int = field()
    endpoint_not_found_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    list_custom_routing_port_mappings_by_destination_response: Optional[shared.ListCustomRoutingPortMappingsByDestinationResponse] = field(default=None)
    
