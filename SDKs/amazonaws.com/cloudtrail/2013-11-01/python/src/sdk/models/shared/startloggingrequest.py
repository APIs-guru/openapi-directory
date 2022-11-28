from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartLoggingRequest:
    r"""StartLoggingRequest
    The request to CloudTrail to start logging Amazon Web Services API calls for an account.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
