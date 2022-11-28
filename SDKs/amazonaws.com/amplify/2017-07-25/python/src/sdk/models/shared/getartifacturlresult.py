from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetArtifactURLResult:
    r"""GetArtifactURLResult
     Returns the result structure for the get artifact request. 
    """
    
    artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    artifact_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactUrl') }})
    
