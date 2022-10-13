from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingRegisteredClientsQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    last_check_in_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'LastCheckInAfter', 'style': 'form', 'explode': True }})
    last_check_in_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'LastCheckInBefore', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OrderBy', 'style': 'form', 'explode': True }})
    report_result: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReportResult', 'style': 'form', 'explode': True }})
    report_result_is_valid: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ReportResultIsValid', 'style': 'form', 'explode': True }})
    report_value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ReportValue', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    update_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingRegisteredClientsRequest:
    query_params: ReportingRegisteredClientsQueryParams = field(default=None)
    

@dataclass
class ReportingRegisteredClientsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_: Optional[shared.APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
