from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_parametermapping


@dataclass_json
@dataclass
class BuildSystemSharedDtoJobActivity:
    activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivityID' }})
    job_activity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobActivityID' }})
    job_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobID' }})
    parameter_mappings: Optional[List[buildsystem_shared_dto_parametermapping.BuildSystemSharedDtoParameterMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterMappings' }})
    run_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunOrder' }})
    
