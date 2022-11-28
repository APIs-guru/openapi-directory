from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListArtifactsResult:
    r"""ListArtifactsResult
     The result structure for the list artifacts request. 
    """
    
    artifacts: List[Artifact] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
