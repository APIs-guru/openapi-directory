from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCreatedArtifactsResult:
    created_artifact_list: Optional[List[CreatedArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedArtifactList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
