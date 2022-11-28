from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWebhookInput:
    project_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    branch_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchFilter') }})
    build_type: Optional[WebhookBuildTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildType') }})
    filter_groups: Optional[List[List[WebhookFilter]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterGroups') }})
    
