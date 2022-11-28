from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputDataConfig:
    r"""OutputDataConfig
    The output data configuration that was supplied when the export job was created.
    """
    
    s3_configuration: Optional[S3Configuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    
