from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateGrokClassifierRequest:
    classification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classification' }})
    custom_patterns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomPatterns' }})
    grok_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrokPattern' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
