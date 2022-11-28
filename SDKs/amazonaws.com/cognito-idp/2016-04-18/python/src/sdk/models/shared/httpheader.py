from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPHeader:
    r"""HTTPHeader
    The HTTP header.
    """
    
    header_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerName') }})
    header_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerValue') }})
    
