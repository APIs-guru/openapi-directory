from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobsGetJobPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'jobID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobsGetJobQueryParams:
    is_include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isIncludeDeleted', 'style': 'form', 'explode': True }})
    

@dataclass
class JobsGetJobRequest:
    path_params: JobsGetJobPathParams = field()
    query_params: JobsGetJobQueryParams = field()
    

@dataclass
class JobsGetJobResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    build_system_shared_dto_job: Optional[shared.BuildSystemSharedDtoJob] = field(default=None)
    
