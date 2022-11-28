from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobsGetJobsQueryParams:
    is_include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isIncludeDeleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class JobsGetJobsRequest:
    query_params: JobsGetJobsQueryParams = field()
    

@dataclass
class JobsGetJobsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_build_system_shared_dto_job_: Optional[shared.APIPagedResponseBuildSystemSharedDtoJob] = field(default=None)
    
