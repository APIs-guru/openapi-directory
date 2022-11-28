from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutAppsListRequest:
    apps_list: AppsListData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsList') }})
    tag_list: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    
