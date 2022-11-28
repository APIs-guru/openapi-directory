from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateJobQueueResponse:
    job_queue_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueueArn') }})
    job_queue_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueueName') }})
    
