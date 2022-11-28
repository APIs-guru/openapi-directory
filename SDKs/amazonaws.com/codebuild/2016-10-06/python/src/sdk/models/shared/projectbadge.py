from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProjectBadge:
    r"""ProjectBadge
    Information about the build badge for the build project.
    """
    
    badge_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeEnabled') }})
    badge_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeRequestUrl') }})
    
