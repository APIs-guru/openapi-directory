from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import snapshotlimits


@dataclass_json
@dataclass
class GetSnapshotLimitsResult:
    snapshot_limits: Optional[snapshotlimits.SnapshotLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotLimits' }})
    
