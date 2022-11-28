from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutThirdPartyJobFailureResultInput:
    r"""PutThirdPartyJobFailureResultInput
    Represents the input of a <code>PutThirdPartyJobFailureResult</code> action.
    """
    
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    failure_details: FailureDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetails') }})
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
