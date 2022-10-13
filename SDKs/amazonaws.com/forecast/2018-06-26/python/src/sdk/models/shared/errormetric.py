from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ErrorMetric:
    forecast_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastType' }})
    mape: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MAPE' }})
    mase: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MASE' }})
    rmse: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RMSE' }})
    wape: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WAPE' }})
    
