from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import revisionlocation


@dataclass_json
@dataclass
class BatchGetApplicationRevisionsInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    revisions: List[revisionlocation.RevisionLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisions' }})
    
