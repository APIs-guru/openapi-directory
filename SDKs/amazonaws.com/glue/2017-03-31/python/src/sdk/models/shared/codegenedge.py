from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeGenEdge:
    r"""CodeGenEdge
    Represents a directional edge in a directed acyclic graph (DAG).
    """
    
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    target: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetParameter') }})
    
