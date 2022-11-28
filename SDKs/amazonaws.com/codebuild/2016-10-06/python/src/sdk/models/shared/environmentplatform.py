from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentPlatform:
    r"""EnvironmentPlatform
    A set of Docker images that are related by platform and are managed by CodeBuild.
    """
    
    languages: Optional[List[EnvironmentLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    platform: Optional[PlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
