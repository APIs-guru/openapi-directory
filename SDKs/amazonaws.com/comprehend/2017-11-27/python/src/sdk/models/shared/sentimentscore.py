from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SentimentScore:
    mixed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mixed' }})
    negative: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Negative' }})
    neutral: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Neutral' }})
    positive: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Positive' }})
    
