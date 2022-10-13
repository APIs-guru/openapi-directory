from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addonissue


@dataclass_json
@dataclass
class AddonHealth:
    issues: Optional[List[addonissue.AddonIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    
