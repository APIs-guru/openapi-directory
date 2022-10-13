from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import revisioninfo


@dataclass_json
@dataclass
class BatchGetApplicationRevisionsOutput:
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    revisions: Optional[List[revisioninfo.RevisionInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    
