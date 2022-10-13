from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import host


@dataclass_json
@dataclass
class ListHostsOutput:
    hosts: Optional[List[host.Host]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hosts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
