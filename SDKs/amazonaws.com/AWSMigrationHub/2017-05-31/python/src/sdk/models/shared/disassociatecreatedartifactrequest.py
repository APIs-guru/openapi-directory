from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisassociateCreatedArtifactRequest:
    created_artifact_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedArtifactName') }})
    migration_task_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MigrationTaskName') }})
    progress_update_stream: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgressUpdateStream') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    
