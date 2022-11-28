from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Error:
    code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
