from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCostEstimationResponse:
    costs: Optional[List[ServiceResourceCost]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Costs') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_collection: Optional[CostEstimationResourceCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCollection') }})
    status: Optional[CostEstimationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    time_range: Optional[CostEstimationTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeRange') }})
    total_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCost') }})
    
