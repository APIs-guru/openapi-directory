from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryObjectsInput:
    r"""QueryObjectsInput
    Contains the parameters for QueryObjects.
    """
    
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    sphere: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sphere') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marker') }})
    query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
