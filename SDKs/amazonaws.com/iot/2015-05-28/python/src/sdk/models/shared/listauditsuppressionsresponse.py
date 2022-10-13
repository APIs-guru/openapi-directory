from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditsuppression


@dataclass_json
@dataclass
class ListAuditSuppressionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    suppressions: Optional[List[auditsuppression.AuditSuppression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressions' }})
    
