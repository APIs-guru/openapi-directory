from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userimportjobtype


@dataclass_json
@dataclass
class ListUserImportJobsResponse:
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaginationToken' }})
    user_import_jobs: Optional[List[userimportjobtype.UserImportJobType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserImportJobs' }})
    
