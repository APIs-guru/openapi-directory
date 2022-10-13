from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetentionConfiguration:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    retention_period_in_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionPeriodInDays' }})
    
