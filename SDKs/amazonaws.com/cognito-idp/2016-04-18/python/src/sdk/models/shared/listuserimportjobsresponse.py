from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUserImportJobsResponse:
    r"""ListUserImportJobsResponse
    Represents the response from the server to the request to list the user import jobs.
    """
    
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    user_import_jobs: Optional[List[UserImportJobType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserImportJobs') }})
    
