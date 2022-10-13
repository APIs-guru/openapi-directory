from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cachemode_enum
from . import cachetype_enum


@dataclass_json
@dataclass
class ProjectCache:
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    modes: Optional[List[cachemode_enum.CacheModeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modes' }})
    type: cachetype_enum.CacheTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
