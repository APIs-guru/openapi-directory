from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListThingRegistrationTaskReportsPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    
class ListThingRegistrationTaskReportsReportTypeEnum(str, Enum):
    ERRORS = "ERRORS"
    RESULTS = "RESULTS"


@dataclass
class ListThingRegistrationTaskReportsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    report_type: ListThingRegistrationTaskReportsReportTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'reportType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListThingRegistrationTaskReportsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListThingRegistrationTaskReportsRequest:
    path_params: ListThingRegistrationTaskReportsPathParams = field(default=None)
    query_params: ListThingRegistrationTaskReportsQueryParams = field(default=None)
    headers: ListThingRegistrationTaskReportsHeaders = field(default=None)
    

@dataclass
class ListThingRegistrationTaskReportsResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_thing_registration_task_reports_response: Optional[shared.ListThingRegistrationTaskReportsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
