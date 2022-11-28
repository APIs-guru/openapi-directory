from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StopLoggingRequest:
    r"""StopLoggingRequest
    Passes the request to CloudTrail to stop logging Amazon Web Services API calls for the specified account.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
