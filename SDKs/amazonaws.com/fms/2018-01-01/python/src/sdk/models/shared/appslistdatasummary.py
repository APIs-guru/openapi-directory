from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppsListDataSummary:
    r"""AppsListDataSummary
    Details of the Firewall Manager applications list.
    """
    
    apps_list: Optional[List[App]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsList') }})
    list_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListArn') }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListId') }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListName') }})
    
