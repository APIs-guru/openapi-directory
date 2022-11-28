from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RunPipelineActivityResponse:
    log_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logResult') }})
    payloads: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloads') }})
    
