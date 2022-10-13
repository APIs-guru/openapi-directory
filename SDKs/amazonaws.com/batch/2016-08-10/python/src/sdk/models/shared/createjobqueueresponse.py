from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateJobQueueResponse:
    job_queue_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueueArn' }})
    job_queue_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueueName' }})
    
