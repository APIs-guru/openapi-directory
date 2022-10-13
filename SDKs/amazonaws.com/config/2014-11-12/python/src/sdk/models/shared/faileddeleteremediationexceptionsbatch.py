from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remediationexceptionresourcekey


@dataclass_json
@dataclass
class FailedDeleteRemediationExceptionsBatch:
    failed_items: Optional[List[remediationexceptionresourcekey.RemediationExceptionResourceKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedItems' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    
