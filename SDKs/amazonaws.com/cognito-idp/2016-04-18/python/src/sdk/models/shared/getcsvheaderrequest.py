from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetCsvHeaderRequest:
    r"""GetCsvHeaderRequest
    Represents the request to get the header information for the .csv file for the user import job.
    """
    
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
