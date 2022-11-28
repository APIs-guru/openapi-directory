from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectSourceVersion:
    r"""ProjectSourceVersion
     A source identifier and its corresponding version. 
    """
    
    source_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceIdentifier') }})
    source_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    
