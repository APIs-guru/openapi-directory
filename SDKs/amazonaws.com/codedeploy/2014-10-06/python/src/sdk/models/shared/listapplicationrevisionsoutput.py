from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import revisionlocation


@dataclass_json
@dataclass
class ListApplicationRevisionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    revisions: Optional[List[revisionlocation.RevisionLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    
