from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventBatchingCondition:
    batch_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchSize' }})
    batch_window: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchWindow' }})
    
