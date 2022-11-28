from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ToolchainSource:
    r"""ToolchainSource
    The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
    """
    
    s3: S3Location = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
