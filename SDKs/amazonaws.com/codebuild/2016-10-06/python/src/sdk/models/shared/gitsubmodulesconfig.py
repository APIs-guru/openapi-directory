from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitSubmodulesConfig:
    r"""GitSubmodulesConfig
     Information about the Git submodules configuration for an CodeBuild build project. 
    """
    
    fetch_submodules: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchSubmodules') }})
    
