from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class DescribeSessionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sessions: Optional[List[session.Session]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sessions' }})
    
