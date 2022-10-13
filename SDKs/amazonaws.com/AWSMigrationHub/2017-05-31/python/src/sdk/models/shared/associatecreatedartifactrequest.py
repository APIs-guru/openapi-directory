from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createdartifact


@dataclass_json
@dataclass
class AssociateCreatedArtifactRequest:
    created_artifact: createdartifact.CreatedArtifact = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedArtifact' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    migration_task_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MigrationTaskName' }})
    progress_update_stream: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgressUpdateStream' }})
    
