from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backupsummary


@dataclass_json
@dataclass
class ListBackupsOutput:
    backup_summaries: Optional[List[backupsummary.BackupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackupSummaries' }})
    last_evaluated_backup_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastEvaluatedBackupArn' }})
    
