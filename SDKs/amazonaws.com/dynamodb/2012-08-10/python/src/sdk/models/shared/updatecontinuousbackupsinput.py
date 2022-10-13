from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import pointintimerecoveryspecification


@dataclass_json
@dataclass
class UpdateContinuousBackupsInput:
    point_in_time_recovery_specification: pointintimerecoveryspecification.PointInTimeRecoverySpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PointInTimeRecoverySpecification' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
