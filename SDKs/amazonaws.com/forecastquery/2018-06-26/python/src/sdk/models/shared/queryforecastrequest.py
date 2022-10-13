from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryForecastRequest:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    filters: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    forecast_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastArn' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    
