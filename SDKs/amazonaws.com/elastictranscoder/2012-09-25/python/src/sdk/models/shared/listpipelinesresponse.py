from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPipelinesResponse:
    r"""ListPipelinesResponse
    A list of the pipelines associated with the current AWS account.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextPageToken') }})
    pipelines: Optional[List[Pipeline]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pipelines') }})
    
