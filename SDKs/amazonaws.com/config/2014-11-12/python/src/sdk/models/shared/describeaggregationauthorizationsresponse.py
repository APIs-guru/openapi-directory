from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregationauthorization


@dataclass_json
@dataclass
class DescribeAggregationAuthorizationsResponse:
    aggregation_authorizations: Optional[List[aggregationauthorization.AggregationAuthorization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregationAuthorizations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
