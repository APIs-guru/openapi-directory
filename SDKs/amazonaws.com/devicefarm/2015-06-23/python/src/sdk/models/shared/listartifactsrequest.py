from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListArtifactsRequest:
    r"""ListArtifactsRequest
    Represents a request to the list artifacts operation.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    type: ArtifactCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
