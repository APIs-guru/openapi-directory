from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteSnapshotRequest:
    r"""DeleteSnapshotRequest
    Contains the inputs for the <a>DeleteSnapshot</a> operation.
    """
    
    snapshot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotId') }})
    
