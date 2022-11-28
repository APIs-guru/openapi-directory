from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetThirdPartyJobDetailsInput:
    r"""GetThirdPartyJobDetailsInput
    Represents the input of a <code>GetThirdPartyJobDetails</code> action.
    """
    
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    job_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    
