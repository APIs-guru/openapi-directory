from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RedshiftRetryOptions:
    r"""RedshiftRetryOptions
    Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
    """
    
    duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInSeconds') }})
    
