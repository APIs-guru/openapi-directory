from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PipelineDescription:
    r"""PipelineDescription
    Contains pipeline metadata.
    """
    
    fields: List[Field] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pipeline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
