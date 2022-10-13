from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OperatorDbt:
    dbt_arguments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbtArguments' }})
    docker_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerImage' }})
    git_repo_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitRepoBranch' }})
    git_repo_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitRepoUrl' }})
    
