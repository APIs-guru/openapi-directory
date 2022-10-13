from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remediationexception


@dataclass_json
@dataclass
class FailedRemediationExceptionBatch:
    failed_items: Optional[List[remediationexception.RemediationException]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedItems' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    
