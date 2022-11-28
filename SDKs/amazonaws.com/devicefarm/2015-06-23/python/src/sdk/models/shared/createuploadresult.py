from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUploadResult:
    r"""CreateUploadResult
    Represents the result of a create upload request.
    """
    
    upload: Optional[Upload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
