from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import continuousbackupsstatus_enum
from . import pointintimerecoverydescription


@dataclass_json
@dataclass
class ContinuousBackupsDescription:
    continuous_backups_status: continuousbackupsstatus_enum.ContinuousBackupsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuousBackupsStatus' }})
    point_in_time_recovery_description: Optional[pointintimerecoverydescription.PointInTimeRecoveryDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PointInTimeRecoveryDescription' }})
    
