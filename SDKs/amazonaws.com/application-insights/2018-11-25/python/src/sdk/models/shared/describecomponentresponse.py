from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeComponentResponse:
    application_component: Optional[ApplicationComponent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationComponent') }})
    resource_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceList') }})
    
