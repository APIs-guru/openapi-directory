from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectBadge:
    badge_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeEnabled' }})
    badge_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badgeRequestUrl' }})
    
