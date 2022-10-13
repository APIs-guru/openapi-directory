from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import directorylimits


@dataclass_json
@dataclass
class GetDirectoryLimitsResult:
    directory_limits: Optional[directorylimits.DirectoryLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryLimits' }})
    
