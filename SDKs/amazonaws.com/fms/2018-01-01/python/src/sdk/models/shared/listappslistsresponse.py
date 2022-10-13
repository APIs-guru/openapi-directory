from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appslistdatasummary


@dataclass_json
@dataclass
class ListAppsListsResponse:
    apps_lists: Optional[List[appslistdatasummary.AppsListDataSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppsLists' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
