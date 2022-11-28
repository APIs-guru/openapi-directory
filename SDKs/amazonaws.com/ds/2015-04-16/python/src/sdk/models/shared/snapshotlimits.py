from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnapshotLimits:
    r"""SnapshotLimits
    Contains manual snapshot limit information for a directory.
    """
    
    manual_snapshots_current_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManualSnapshotsCurrentCount') }})
    manual_snapshots_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManualSnapshotsLimit') }})
    manual_snapshots_limit_reached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManualSnapshotsLimitReached') }})
    
