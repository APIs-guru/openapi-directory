from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineDeclaration:
    r"""PipelineDeclaration
    Represents the structure of actions and stages to be performed in the pipeline.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    stages: List[StageDeclaration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    artifact_store: Optional[ArtifactStore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStore') }})
    artifact_stores: Optional[dict[str, ArtifactStore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactStores') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
