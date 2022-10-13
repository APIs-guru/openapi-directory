from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import aggregationauthorization


@dataclass_json
@dataclass
class PutAggregationAuthorizationResponse:
    aggregation_authorization: Optional[aggregationauthorization.AggregationAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregationAuthorization' }})
    
