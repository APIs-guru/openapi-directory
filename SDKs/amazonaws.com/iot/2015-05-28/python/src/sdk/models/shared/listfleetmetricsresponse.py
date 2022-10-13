from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleetmetricnameandarn


@dataclass_json
@dataclass
class ListFleetMetricsResponse:
    fleet_metrics: Optional[List[fleetmetricnameandarn.FleetMetricNameAndArn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleetMetrics' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
