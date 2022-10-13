from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mitigationactionidentifier


@dataclass_json
@dataclass
class ListMitigationActionsResponse:
    action_identifiers: Optional[List[mitigationactionidentifier.MitigationActionIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionIdentifiers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
