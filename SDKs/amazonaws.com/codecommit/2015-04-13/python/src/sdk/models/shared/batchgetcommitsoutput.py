from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import commit
from . import batchgetcommitserror


@dataclass_json
@dataclass
class BatchGetCommitsOutput:
    commits: Optional[List[commit.Commit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits' }})
    errors: Optional[List[batchgetcommitserror.BatchGetCommitsError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
