from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitHubCodeDestination:
    r"""GitHubCodeDestination
    Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
    """
    
    issues_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuesEnabled') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    private_repository: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateRepository') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
