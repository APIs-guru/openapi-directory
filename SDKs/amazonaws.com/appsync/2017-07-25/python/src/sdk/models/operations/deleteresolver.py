from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class DeleteResolverPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    field_name: str = field(metadata={'path_param': { 'field_name': 'fieldName', 'style': 'simple', 'explode': False }})
    type_name: str = field(metadata={'path_param': { 'field_name': 'typeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteResolverHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteResolverRequest:
    headers: DeleteResolverHeaders = field()
    path_params: DeleteResolverPathParams = field()
    

@dataclass
class DeleteResolverResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    delete_resolver_response: Optional[dict[str, Any]] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
