from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputLocation:
    r"""OutputLocation
    Contains information about the location where the select job results are stored.
    """
    
    s3: Optional[S3Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3') }})
    
