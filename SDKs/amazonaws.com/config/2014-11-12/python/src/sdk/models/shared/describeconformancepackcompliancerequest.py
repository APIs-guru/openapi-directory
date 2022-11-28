from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConformancePackComplianceRequest:
    conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    filters: Optional[ConformancePackComplianceFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
