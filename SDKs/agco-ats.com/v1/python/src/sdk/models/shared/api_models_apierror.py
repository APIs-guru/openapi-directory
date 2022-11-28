from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIModelsAPIError:
    developer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperMessage') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    more_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MoreInfo') }})
    user_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMessage') }})
    
