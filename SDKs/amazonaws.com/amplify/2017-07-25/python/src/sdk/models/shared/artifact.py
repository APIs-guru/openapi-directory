from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Artifact:
    r"""Artifact
     Describes an artifact. 
    """
    
    artifact_file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactFileName') }})
    artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    
