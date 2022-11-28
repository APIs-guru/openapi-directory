from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageFailure:
    r"""ImageFailure
    An object representing an Amazon ECR image failure.
    """
    
    failure_code: Optional[ImageFailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    image_id: Optional[ImageIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    
