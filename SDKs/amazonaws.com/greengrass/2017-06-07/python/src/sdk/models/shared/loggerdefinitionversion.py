from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggerDefinitionVersion:
    r"""LoggerDefinitionVersion
    Information about a logger definition version.
    """
    
    loggers: Optional[List[Logger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Loggers') }})
    
