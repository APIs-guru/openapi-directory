from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Filter:
    r"""Filter
     An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
    """
    
    formula: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    context_row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextRowId') }})
    
