from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildnotdeleted


@dataclass_json
@dataclass
class DeleteBuildBatchOutput:
    builds_deleted: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildsDeleted' }})
    builds_not_deleted: Optional[List[buildnotdeleted.BuildNotDeleted]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildsNotDeleted' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
