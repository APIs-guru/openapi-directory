from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputTransformer:
    r"""InputTransformer
    Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
    """
    
    input_template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputTemplate') }})
    input_paths_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputPathsMap') }})
    
