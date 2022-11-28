from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryOptions:
    r"""RetryOptions
     The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
    """
    
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInSeconds') }})
    
