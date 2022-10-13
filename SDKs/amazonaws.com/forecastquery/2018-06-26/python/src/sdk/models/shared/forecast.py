from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datapoint


@dataclass_json
@dataclass
class Forecast:
    predictions: Optional[dict[str, List[datapoint.DataPoint]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predictions' }})
    
