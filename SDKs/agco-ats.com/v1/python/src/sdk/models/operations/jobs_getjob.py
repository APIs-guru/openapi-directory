from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobsGetJobPathParams:
    job_id: int = field(default=None, metadata={'path_param': { 'field_name': 'jobID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobsGetJobQueryParams:
    is_include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isIncludeDeleted', 'style': 'form', 'explode': True }})
    

@dataclass
class JobsGetJobRequest:
    path_params: JobsGetJobPathParams = field(default=None)
    query_params: JobsGetJobQueryParams = field(default=None)
    

@dataclass
class JobsGetJobResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    build_system_shared_dto_job: Optional[shared.BuildSystemSharedDtoJob] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
