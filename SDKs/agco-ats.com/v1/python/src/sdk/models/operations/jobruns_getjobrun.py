from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobRunsGetJobRunPathParams:
    job_run_id: int = field(metadata={'path_param': { 'field_name': 'jobRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobRunsGetJobRunQueryParams:
    include_activity_run_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeActivityRunDetails', 'style': 'form', 'explode': True }})
    

@dataclass
class JobRunsGetJobRunRequest:
    path_params: JobRunsGetJobRunPathParams = field()
    query_params: JobRunsGetJobRunQueryParams = field()
    

@dataclass
class JobRunsGetJobRunResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    build_system_shared_dto_job_run: Optional[shared.BuildSystemSharedDtoJobRun] = field(default=None)
    
