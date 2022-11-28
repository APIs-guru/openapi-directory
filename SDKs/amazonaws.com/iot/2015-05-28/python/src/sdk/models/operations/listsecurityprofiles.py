from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListSecurityProfilesQueryParams:
    dimension_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dimensionName', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    metric_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metricName', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSecurityProfilesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSecurityProfilesRequest:
    headers: ListSecurityProfilesHeaders = field()
    query_params: ListSecurityProfilesQueryParams = field()
    

@dataclass
class ListSecurityProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_security_profiles_response: Optional[shared.ListSecurityProfilesResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
