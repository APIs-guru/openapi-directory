from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationSummary:
    r"""RecommendationSummary
    A summary of a recommendation.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    recommendation_resource_type: Optional[RecommendationSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationResourceType') }})
    summaries: Optional[List[Summary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    
