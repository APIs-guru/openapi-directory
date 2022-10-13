from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import featurization


@dataclass_json
@dataclass
class FeaturizationConfig:
    featurizations: Optional[List[featurization.Featurization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Featurizations' }})
    forecast_dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastDimensions' }})
    forecast_frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastFrequency' }})
    
