from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDeploymentResult:
    r"""CreateDeploymentResult
     The result structure for the create a new deployment request. 
    """
    
    file_upload_urls: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUploadUrls') }})
    zip_upload_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipUploadUrl') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
