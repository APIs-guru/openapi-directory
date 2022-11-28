from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutClusterCapacityProvidersXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_PUT_CLUSTER_CAPACITY_PROVIDERS = "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders"


@dataclass
class PutClusterCapacityProvidersHeaders:
    x_amz_target: PutClusterCapacityProvidersXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutClusterCapacityProvidersRequest:
    headers: PutClusterCapacityProvidersHeaders = field()
    request: shared.PutClusterCapacityProvidersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutClusterCapacityProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    cluster_not_found_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    put_cluster_capacity_providers_response: Optional[shared.PutClusterCapacityProvidersResponse] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    update_in_progress_exception: Optional[Any] = field(default=None)
    
