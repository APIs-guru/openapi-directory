from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PointInTimeRecoverySpecification:
    point_in_time_recovery_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PointInTimeRecoveryEnabled' }})
    
