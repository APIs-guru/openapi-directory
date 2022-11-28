from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchRestrictions:
    r"""BatchRestrictions
    Specifies restrictions for the batch build.
    """
    
    compute_types_allowed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeTypesAllowed') }})
    maximum_builds_allowed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumBuildsAllowed') }})
    
