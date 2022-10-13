from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_jobrun
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseBuildSystemSharedDtoJobRun:
    entities: List[buildsystem_shared_dto_jobrun.BuildSystemSharedDtoJobRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
