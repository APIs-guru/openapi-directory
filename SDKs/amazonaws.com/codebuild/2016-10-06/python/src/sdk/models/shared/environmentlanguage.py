from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentLanguage:
    r"""EnvironmentLanguage
    A set of Docker images that are related by programming language and are managed by CodeBuild.
    """
    
    images: Optional[List[EnvironmentImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    language: Optional[LanguageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    
