from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildGroup:
    r"""BuildGroup
    Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
    """
    
    current_build_summary: Optional[BuildSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentBuildSummary') }})
    depends_on: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    ignore_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreFailure') }})
    prior_build_summary_list: Optional[List[BuildSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorBuildSummaryList') }})
    
