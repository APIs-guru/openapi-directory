from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WeightedQuantileLoss:
    loss_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LossValue' }})
    quantile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantile' }})
    
