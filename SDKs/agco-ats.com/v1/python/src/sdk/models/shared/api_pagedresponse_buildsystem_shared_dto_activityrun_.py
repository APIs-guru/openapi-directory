from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_activityrun
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseBuildSystemSharedDtoActivityRun:
    entities: List[buildsystem_shared_dto_activityrun.BuildSystemSharedDtoActivityRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
