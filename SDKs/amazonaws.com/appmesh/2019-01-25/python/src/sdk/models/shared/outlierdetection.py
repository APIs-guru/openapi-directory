from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import duration
from . import duration


@dataclass_json
@dataclass
class OutlierDetection:
    base_ejection_duration: duration.Duration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseEjectionDuration' }})
    interval: duration.Duration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    max_ejection_percent: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEjectionPercent' }})
    max_server_errors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxServerErrors' }})
    
