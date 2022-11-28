from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CodeSource:
    r"""CodeSource
    The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
    """
    
    s3: S3Location = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
