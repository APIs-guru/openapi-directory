from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTableDataImportJobResult:
    job_metadata: TableDataImportJobMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobMetadata') }})
    job_status: TableDataImportJobStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStatus') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
