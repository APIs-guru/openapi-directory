from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TieringPolicy:
    r"""TieringPolicy
    Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
    """
    
    cooling_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoolingPeriod') }})
    name: Optional[TieringPolicyNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
