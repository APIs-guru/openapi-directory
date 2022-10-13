from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import intervalunitvalues_enum
from . import locationvalues_enum


@dataclass_json
@dataclass
class CreateRule:
    cron_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CronExpression' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interval' }})
    interval_unit: Optional[intervalunitvalues_enum.IntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntervalUnit' }})
    location: Optional[locationvalues_enum.LocationValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    times: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Times' }})
    
