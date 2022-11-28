from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Logging:
    r"""Logging
    Logging configuration defines where Image Builder uploads your logs.
    """
    
    s3_logs: Optional[S3Logs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    
