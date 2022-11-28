from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorMetric:
    r"""ErrorMetric
     Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object. 
    """
    
    forecast_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastType') }})
    mape: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MAPE') }})
    mase: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MASE') }})
    rmse: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RMSE') }})
    wape: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WAPE') }})
    
