from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import app


@dataclass_json
@dataclass
class AppsListDataSummary:
    apps_list: Optional[List[app.App]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppsList' }})
    list_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListArn' }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListId' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListName' }})
    
