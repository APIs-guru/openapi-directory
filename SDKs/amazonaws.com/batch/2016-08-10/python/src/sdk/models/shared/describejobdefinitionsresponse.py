from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobdefinition


@dataclass_json
@dataclass
class DescribeJobDefinitionsResponse:
    job_definitions: Optional[List[jobdefinition.JobDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinitions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
