from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeploymentOverview:
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Failed' }})
    in_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InProgress' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Pending' }})
    ready: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ready' }})
    skipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Skipped' }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Succeeded' }})
    
