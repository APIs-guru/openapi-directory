from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListContainerRecipesResponse:
    container_recipe_summary_list: Optional[List[ContainerRecipeSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerRecipeSummaryList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
