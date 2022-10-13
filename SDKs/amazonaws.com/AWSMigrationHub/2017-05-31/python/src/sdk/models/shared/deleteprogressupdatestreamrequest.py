from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteProgressUpdateStreamRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    progress_update_stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStreamName' }})
    
