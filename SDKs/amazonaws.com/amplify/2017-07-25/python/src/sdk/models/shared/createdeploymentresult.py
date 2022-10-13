from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDeploymentResult:
    file_upload_urls: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUploadUrls' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    zip_upload_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipUploadUrl' }})
    
