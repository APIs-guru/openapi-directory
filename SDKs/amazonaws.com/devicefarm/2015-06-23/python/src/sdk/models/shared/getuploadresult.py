from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetUploadResult:
    r"""GetUploadResult
    Represents the result of a get upload request.
    """
    
    upload: Optional[Upload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
