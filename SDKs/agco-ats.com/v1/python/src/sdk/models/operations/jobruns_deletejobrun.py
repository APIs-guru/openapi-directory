from dataclasses import dataclass, field



@dataclass
class JobRunsDeleteJobRunPathParams:
    job_run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'jobRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobRunsDeleteJobRunRequest:
    path_params: JobRunsDeleteJobRunPathParams = field(default=None)
    

@dataclass
class JobRunsDeleteJobRunResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
