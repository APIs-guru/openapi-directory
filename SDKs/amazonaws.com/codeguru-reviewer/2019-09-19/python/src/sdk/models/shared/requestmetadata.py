from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestMetadata:
    r"""RequestMetadata
    Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews.
    """
    
    event_info: Optional[EventInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventInfo') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    requester: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requester') }})
    vendor_name: Optional[VendorNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VendorName') }})
    
