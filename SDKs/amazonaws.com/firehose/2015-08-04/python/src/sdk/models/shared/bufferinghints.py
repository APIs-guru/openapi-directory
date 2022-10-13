from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BufferingHints:
    interval_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntervalInSeconds' }})
    size_in_m_bs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeInMBs' }})
    
