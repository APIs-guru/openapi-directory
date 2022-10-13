from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationinfo


@dataclass_json
@dataclass
class ListApplicationsResponse:
    application_info_list: Optional[List[applicationinfo.ApplicationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationInfoList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
