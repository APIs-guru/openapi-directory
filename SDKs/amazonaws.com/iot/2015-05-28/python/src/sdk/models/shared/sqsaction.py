from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SqsAction:
    r"""SqsAction
    Describes an action to publish data to an Amazon SQS queue.
    """
    
    queue_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueUrl') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    use_base64: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useBase64') }})
    
