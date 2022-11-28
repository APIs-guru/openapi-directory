from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateReportGroupInput:
    export_config: ReportExportConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportConfig') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: ReportTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
