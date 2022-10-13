from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import rateincreasecriteria


@dataclass_json
@dataclass
class ExponentialRolloutRate:
    base_rate_per_minute: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseRatePerMinute' }})
    increment_factor: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incrementFactor' }})
    rate_increase_criteria: rateincreasecriteria.RateIncreaseCriteria = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateIncreaseCriteria' }})
    
