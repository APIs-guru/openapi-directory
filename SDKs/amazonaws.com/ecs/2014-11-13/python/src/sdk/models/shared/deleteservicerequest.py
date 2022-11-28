from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteServiceRequest:
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    
