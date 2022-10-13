from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcekey


@dataclass_json
@dataclass
class StartRemediationExecutionResponse:
    failed_items: Optional[List[resourcekey.ResourceKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedItems' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    
