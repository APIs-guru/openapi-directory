from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import remediationaction


@dataclass_json
@dataclass
class RemediationActionWithOrder:
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Order' }})
    remediation_action: Optional[remediationaction.RemediationAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationAction' }})
    
