from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobRunsGetJobRunPathParams:
    job_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'jobRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobRunsGetJobRunQueryParams:
    include_activity_run_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeActivityRunDetails', 'style': 'form', 'explode': True }})
    

@dataclass
class JobRunsGetJobRunRequest:
    path_params: JobRunsGetJobRunPathParams = field(default=None)
    query_params: JobRunsGetJobRunQueryParams = field(default=None)
    

@dataclass
class JobRunsGetJobRunResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    build_system_shared_dto_job_run: Optional[shared.BuildSystemSharedDtoJobRun] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
