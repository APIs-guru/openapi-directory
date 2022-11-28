from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBackupsOutput:
    backup_summaries: Optional[List[BackupSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupSummaries') }})
    last_evaluated_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedBackupArn') }})
    
