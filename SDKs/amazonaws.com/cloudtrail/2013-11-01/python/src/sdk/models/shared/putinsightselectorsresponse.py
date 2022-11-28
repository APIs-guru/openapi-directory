from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutInsightSelectorsResponse:
    insight_selectors: Optional[List[InsightSelector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightSelectors') }})
    trail_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrailARN') }})
    
