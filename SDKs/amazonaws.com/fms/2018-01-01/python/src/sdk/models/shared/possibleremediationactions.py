from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import possibleremediationaction


@dataclass_json
@dataclass
class PossibleRemediationActions:
    actions: Optional[List[possibleremediationaction.PossibleRemediationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    
