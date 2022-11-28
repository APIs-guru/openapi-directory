from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScanInput:
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToGet') }})
    count: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    exclusive_start_key: Optional[Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartKey') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    scan_filter: Optional[dict[str, Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScanFilter') }})
    
