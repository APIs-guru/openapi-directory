from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectStatus:
    r"""ProjectStatus
    An indication of whether a project creation or deletion is failed or successful.
    """
    
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
