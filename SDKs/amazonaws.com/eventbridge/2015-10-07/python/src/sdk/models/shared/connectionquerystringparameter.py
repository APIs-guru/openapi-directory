from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionQueryStringParameter:
    r"""ConnectionQueryStringParameter
    Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
    """
    
    is_value_secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsValueSecret') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
