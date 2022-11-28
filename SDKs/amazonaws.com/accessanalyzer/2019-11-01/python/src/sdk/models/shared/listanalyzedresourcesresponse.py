from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAnalyzedResourcesResponse:
    r"""ListAnalyzedResourcesResponse
    The response to the request.
    """
    
    analyzed_resources: List[AnalyzedResourceSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzedResources') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
