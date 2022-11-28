from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRecordBatchOutput:
    failed_put_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedPutCount') }})
    request_responses: List[PutRecordBatchResponseEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestResponses') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    
