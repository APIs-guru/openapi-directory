from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conflict
from . import batchdescribemergeconflictserror


@dataclass_json
@dataclass
class BatchDescribeMergeConflictsOutput:
    base_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseCommitId' }})
    conflicts: List[conflict.Conflict] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflicts' }})
    destination_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationCommitId' }})
    errors: Optional[List[batchdescribemergeconflictserror.BatchDescribeMergeConflictsError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    source_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceCommitId' }})
    
