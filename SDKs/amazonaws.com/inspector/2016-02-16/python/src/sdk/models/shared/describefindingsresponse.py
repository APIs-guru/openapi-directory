from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFindingsResponse:
    failed_items: dict[str, FailedItemDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    findings: List[Finding] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    
