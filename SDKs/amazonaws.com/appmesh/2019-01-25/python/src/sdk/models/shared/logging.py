from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Logging:
    r"""Logging
    An object that represents the logging information for a virtual node.
    """
    
    access_log: Optional[AccessLog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLog') }})
    
