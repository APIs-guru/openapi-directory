from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OperatorDbt:
    git_repo_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitRepoUrl') }})
    dbt_arguments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbtArguments') }})
    docker_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImage') }})
    git_repo_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitRepoBranch') }})
    
