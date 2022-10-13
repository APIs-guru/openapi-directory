from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computeplatform_enum
from . import tag


@dataclass_json
@dataclass
class CreateApplicationInput:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationName' }})
    compute_platform: Optional[computeplatform_enum.ComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computePlatform' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
