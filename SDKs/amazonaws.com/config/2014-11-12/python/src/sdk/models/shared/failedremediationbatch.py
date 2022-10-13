from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remediationconfiguration


@dataclass_json
@dataclass
class FailedRemediationBatch:
    failed_items: Optional[List[remediationconfiguration.RemediationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedItems' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureMessage' }})
    
