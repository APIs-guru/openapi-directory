from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobRunsGetJobRunsQueryParams:
    include_activity_run_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeActivityRunDetails', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class JobRunsGetJobRunsRequest:
    query_params: JobRunsGetJobRunsQueryParams = field()
    

@dataclass
class JobRunsGetJobRunsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_build_system_shared_dto_job_run_: Optional[shared.APIPagedResponseBuildSystemSharedDtoJobRun] = field(default=None)
    
