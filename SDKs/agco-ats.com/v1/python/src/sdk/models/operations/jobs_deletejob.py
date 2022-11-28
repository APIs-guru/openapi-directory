from dataclasses import dataclass, field
from typing import Optional


@dataclass
class JobsDeleteJobPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'jobID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobsDeleteJobRequest:
    path_params: JobsDeleteJobPathParams = field()
    

@dataclass
class JobsDeleteJobResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
