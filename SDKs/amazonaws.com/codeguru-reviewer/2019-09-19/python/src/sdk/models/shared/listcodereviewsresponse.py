from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCodeReviewsResponse:
    code_review_summaries: Optional[List[CodeReviewSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeReviewSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
