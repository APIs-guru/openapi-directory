from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ListFindingsReportsPathParams:
    profiling_group_name: str = field(metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFindingsReportsQueryParams:
    end_time: datetime = field(metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    start_time: datetime = field(metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    daily_reports_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'dailyReportsOnly', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFindingsReportsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListFindingsReportsRequest:
    headers: ListFindingsReportsHeaders = field()
    path_params: ListFindingsReportsPathParams = field()
    query_params: ListFindingsReportsQueryParams = field()
    

@dataclass
class ListFindingsReportsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    list_findings_reports_response: Optional[shared.ListFindingsReportsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
