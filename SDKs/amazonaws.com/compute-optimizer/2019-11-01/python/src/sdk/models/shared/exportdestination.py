from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExportDestination:
    r"""ExportDestination
    Describes the destination of the recommendations export and metadata files.
    """
    
    s3: Optional[S3Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    
