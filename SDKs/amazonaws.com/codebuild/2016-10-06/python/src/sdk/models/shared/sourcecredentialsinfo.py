from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceCredentialsInfo:
    r"""SourceCredentialsInfo
     Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    auth_type: Optional[AuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    server_type: Optional[ServerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    
