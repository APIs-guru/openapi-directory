from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PointInTimeRecoverySpecification:
    r"""PointInTimeRecoverySpecification
    Represents the settings used to enable point in time recovery.
    """
    
    point_in_time_recovery_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointInTimeRecoveryEnabled') }})
    
