from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import forecastsummary


@dataclass_json
@dataclass
class ListForecastsResponse:
    forecasts: Optional[List[forecastsummary.ForecastSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Forecasts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
