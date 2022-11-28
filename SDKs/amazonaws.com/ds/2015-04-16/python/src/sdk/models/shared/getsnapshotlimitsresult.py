from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSnapshotLimitsResult:
    r"""GetSnapshotLimitsResult
    Contains the results of the <a>GetSnapshotLimits</a> operation.
    """
    
    snapshot_limits: Optional[SnapshotLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotLimits') }})
    
