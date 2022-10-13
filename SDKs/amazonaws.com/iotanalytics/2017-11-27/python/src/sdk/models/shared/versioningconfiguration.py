from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VersioningConfiguration:
    max_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxVersions' }})
    unlimited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited' }})
    
