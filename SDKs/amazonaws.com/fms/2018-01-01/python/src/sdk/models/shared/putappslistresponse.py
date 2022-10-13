from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appslistdata


@dataclass_json
@dataclass
class PutAppsListResponse:
    apps_list: Optional[appslistdata.AppsListData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppsList' }})
    apps_list_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppsListArn' }})
    
