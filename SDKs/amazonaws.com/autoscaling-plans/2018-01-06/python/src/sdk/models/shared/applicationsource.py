from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationSource:
    r"""ApplicationSource
    Represents an application source.
    """
    
    cloud_formation_stack_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormationStackARN') }})
    tag_filters: Optional[List[TagFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagFilters') }})
    
