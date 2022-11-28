from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Criterion:
    r"""Criterion
    The criteria to use in the filter that defines the archive rule.
    """
    
    contains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains') }})
    eq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eq') }})
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exists') }})
    neq: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neq') }})
    
