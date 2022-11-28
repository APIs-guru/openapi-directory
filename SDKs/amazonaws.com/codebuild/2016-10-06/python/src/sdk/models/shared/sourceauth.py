from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceAuth:
    r"""SourceAuth
    <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>
    """
    
    type: SourceAuthTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
