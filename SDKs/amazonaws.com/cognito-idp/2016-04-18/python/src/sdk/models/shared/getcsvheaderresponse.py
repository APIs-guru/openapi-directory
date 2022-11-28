from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetCsvHeaderResponse:
    r"""GetCsvHeaderResponse
    Represents the response from the server to the request to get the header information for the .csv file for the user import job.
    """
    
    csv_header: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CSVHeader') }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
