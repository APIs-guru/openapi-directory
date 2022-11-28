from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeliverConfigSnapshotResponse:
    r"""DeliverConfigSnapshotResponse
    The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.
    """
    
    config_snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSnapshotId') }})
    
