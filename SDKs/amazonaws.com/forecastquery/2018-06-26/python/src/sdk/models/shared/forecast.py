from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Forecast:
    r"""Forecast
    Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
    """
    
    predictions: Optional[dict[str, List[DataPoint]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predictions') }})
    
