from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class DeleteThingPathParams:
    thing_name: str = field(metadata={'path_param': { 'field_name': 'thingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteThingQueryParams:
    expected_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'expectedVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteThingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteThingRequest:
    headers: DeleteThingHeaders = field()
    path_params: DeleteThingPathParams = field()
    query_params: DeleteThingQueryParams = field()
    

@dataclass
class DeleteThingResponse:
    content_type: str = field()
    status_code: int = field()
    delete_thing_response: Optional[dict[str, Any]] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
