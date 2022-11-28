from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContinuousBackupsDescription:
    r"""ContinuousBackupsDescription
    Represents the continuous backups and point in time recovery settings on the table.
    """
    
    continuous_backups_status: ContinuousBackupsStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousBackupsStatus') }})
    point_in_time_recovery_description: Optional[PointInTimeRecoveryDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointInTimeRecoveryDescription') }})
    
