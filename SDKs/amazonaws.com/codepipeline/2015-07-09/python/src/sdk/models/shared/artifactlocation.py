from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArtifactLocation:
    r"""ArtifactLocation
    Represents information about the location of an artifact.
    """
    
    s3_location: Optional[S3ArtifactLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    type: Optional[ArtifactLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
