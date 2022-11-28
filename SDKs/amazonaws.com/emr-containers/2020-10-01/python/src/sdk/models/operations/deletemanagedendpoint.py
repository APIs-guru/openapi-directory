from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteManagedEndpointPathParams:
    endpoint_id: str = field(metadata={'path_param': { 'field_name': 'endpointId', 'style': 'simple', 'explode': False }})
    virtual_cluster_id: str = field(metadata={'path_param': { 'field_name': 'virtualClusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedEndpointRequest:
    headers: DeleteManagedEndpointHeaders = field()
    path_params: DeleteManagedEndpointPathParams = field()
    

@dataclass
class DeleteManagedEndpointResponse:
    content_type: str = field()
    status_code: int = field()
    delete_managed_endpoint_response: Optional[shared.DeleteManagedEndpointResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
