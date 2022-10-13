from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BuildStatusConfig:
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    
