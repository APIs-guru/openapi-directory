from dataclasses import dataclass, field



@dataclass
class JobsDeleteJobPathParams:
    job_id: int = field(default=None, metadata={'path_param': { 'field_name': 'jobID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobsDeleteJobRequest:
    path_params: JobsDeleteJobPathParams = field(default=None)
    

@dataclass
class JobsDeleteJobResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
