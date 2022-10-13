from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import environmentlanguage
from . import platformtype_enum


@dataclass_json
@dataclass
class EnvironmentPlatform:
    languages: Optional[List[environmentlanguage.EnvironmentLanguage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    platform: Optional[platformtype_enum.PlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    
