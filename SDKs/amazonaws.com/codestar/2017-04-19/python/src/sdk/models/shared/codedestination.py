from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import codecommitcodedestination
from . import githubcodedestination


@dataclass_json
@dataclass
class CodeDestination:
    code_commit: Optional[codecommitcodedestination.CodeCommitCodeDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeCommit' }})
    git_hub: Optional[githubcodedestination.GitHubCodeDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitHub' }})
    
