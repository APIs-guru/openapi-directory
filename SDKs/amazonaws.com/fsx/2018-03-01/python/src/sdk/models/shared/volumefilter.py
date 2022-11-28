from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VolumeFilter:
    r"""VolumeFilter
    A filter used to restrict the results of describe calls for Amazon FSx for NetApp ONTAP volumes. You can use multiple filters to return results that meet all applied filter requirements.
    """
    
    name: Optional[VolumeFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
