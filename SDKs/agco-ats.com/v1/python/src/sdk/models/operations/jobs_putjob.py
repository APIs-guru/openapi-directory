from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobsPutJobPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'jobID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobsPutJobRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_job: Optional[shared.BuildSystemSharedDtoJobInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_job1: Optional[shared.BuildSystemSharedDtoJobInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_job2: Optional[shared.BuildSystemSharedDtoJobInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class JobsPutJobRequest:
    path_params: JobsPutJobPathParams = field()
    request: JobsPutJobRequestsInput = field()
    

@dataclass
class JobsPutJobResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
