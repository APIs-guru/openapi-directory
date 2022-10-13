from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Identity:
    source_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIp' }})
    user_agent: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserAgent' }})
    
