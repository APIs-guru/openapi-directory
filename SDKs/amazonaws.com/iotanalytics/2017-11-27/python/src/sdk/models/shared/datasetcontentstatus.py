from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasetcontentstate_enum


@dataclass_json
@dataclass
class DatasetContentStatus:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    state: Optional[datasetcontentstate_enum.DatasetContentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
