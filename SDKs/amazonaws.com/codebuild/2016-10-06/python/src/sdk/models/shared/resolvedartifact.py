from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResolvedArtifact:
    r"""ResolvedArtifact
    Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
    """
    
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    type: Optional[ArtifactsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
