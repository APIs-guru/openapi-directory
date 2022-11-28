from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListThingRegistrationTaskReportsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    report_type: Optional[ReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    resource_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLinks') }})
    
