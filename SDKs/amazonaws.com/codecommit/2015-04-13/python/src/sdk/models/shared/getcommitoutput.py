from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import commit


@dataclass_json
@dataclass
class GetCommitOutput:
    commit: commit.Commit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit' }})
    
