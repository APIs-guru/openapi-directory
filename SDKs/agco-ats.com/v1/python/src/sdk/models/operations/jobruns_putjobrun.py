from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobRunsPutJobRunPathParams:
    job_run_id: int = field(metadata={'path_param': { 'field_name': 'jobRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobRunsPutJobRunRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_job_run: Optional[shared.BuildSystemSharedDtoJobRunInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_job_run1: Optional[shared.BuildSystemSharedDtoJobRunInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_job_run2: Optional[shared.BuildSystemSharedDtoJobRunInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class JobRunsPutJobRunRequest:
    path_params: JobRunsPutJobRunPathParams = field()
    request: JobRunsPutJobRunRequestsInput = field()
    

@dataclass
class JobRunsPutJobRunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
