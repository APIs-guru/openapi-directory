from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Subscription:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
