from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3destination


@dataclass_json
@dataclass
class ExportEc2InstanceRecommendationsResponse:
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobId' }})
    s3_destination: Optional[s3destination.S3Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Destination' }})
    
