from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsummary
from . import buildsummary


@dataclass_json
@dataclass
class BuildGroup:
    current_build_summary: Optional[buildsummary.BuildSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentBuildSummary' }})
    depends_on: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependsOn' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    ignore_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreFailure' }})
    prior_build_summary_list: Optional[List[buildsummary.BuildSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priorBuildSummaryList' }})
    
