from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteSnapshotResult:
    r"""DeleteSnapshotResult
    Contains the results of the <a>DeleteSnapshot</a> operation.
    """
    
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotId') }})
    
