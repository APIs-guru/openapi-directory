from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import remediationactionwithorder


@dataclass_json
@dataclass
class PossibleRemediationAction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_default_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDefaultAction' }})
    ordered_remediation_actions: List[remediationactionwithorder.RemediationActionWithOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderedRemediationActions' }})
    
