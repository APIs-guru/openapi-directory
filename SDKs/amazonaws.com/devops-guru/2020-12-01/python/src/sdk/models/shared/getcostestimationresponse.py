from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import serviceresourcecost
from . import costestimationresourcecollectionfilter
from . import costestimationstatus_enum
from . import costestimationtimerange


@dataclass_json
@dataclass
class GetCostEstimationResponse:
    costs: Optional[List[serviceresourcecost.ServiceResourceCost]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Costs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_collection: Optional[costestimationresourcecollectionfilter.CostEstimationResourceCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    status: Optional[costestimationstatus_enum.CostEstimationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    time_range: Optional[costestimationtimerange.CostEstimationTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeRange' }})
    total_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCost' }})
    
