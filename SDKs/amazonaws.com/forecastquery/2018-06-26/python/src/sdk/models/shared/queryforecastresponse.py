from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import forecast


@dataclass_json
@dataclass
class QueryForecastResponse:
    forecast: Optional[forecast.Forecast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Forecast' }})
    
