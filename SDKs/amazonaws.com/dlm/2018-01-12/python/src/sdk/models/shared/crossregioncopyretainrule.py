from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import retentionintervalunitvalues_enum


@dataclass_json
@dataclass
class CrossRegionCopyRetainRule:
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interval' }})
    interval_unit: Optional[retentionintervalunitvalues_enum.RetentionIntervalUnitValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntervalUnit' }})
    
