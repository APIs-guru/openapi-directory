from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class JobsPostJobRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_job: Optional[shared.BuildSystemSharedDtoJobInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_job1: Optional[shared.BuildSystemSharedDtoJobInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_job2: Optional[shared.BuildSystemSharedDtoJobInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class JobsPostJobRequest:
    request: JobsPostJobRequestsInput = field()
    

@dataclass
class JobsPostJobResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    jobs_post_job_200_application_json_int32_integer: Optional[int] = field(default=None)
    jobs_post_job_200_text_json_int32_integer: Optional[int] = field(default=None)
    
