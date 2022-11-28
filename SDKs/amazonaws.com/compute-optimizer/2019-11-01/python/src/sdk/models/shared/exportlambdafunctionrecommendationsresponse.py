from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportLambdaFunctionRecommendationsResponse:
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    s3_destination: Optional[S3Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Destination') }})
    
