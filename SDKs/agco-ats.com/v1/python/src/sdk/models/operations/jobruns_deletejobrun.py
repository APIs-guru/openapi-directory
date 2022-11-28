from dataclasses import dataclass, field
from typing import Optional


@dataclass
class JobRunsDeleteJobRunPathParams:
    job_run_id: int = field(metadata={'path_param': { 'field_name': 'jobRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobRunsDeleteJobRunRequest:
    path_params: JobRunsDeleteJobRunPathParams = field()
    

@dataclass
class JobRunsDeleteJobRunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
