from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessPreviewStatusReason:
    r"""AccessPreviewStatusReason
    Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
    """
    
    code: AccessPreviewStatusReasonCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
