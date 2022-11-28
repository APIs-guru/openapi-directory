from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SmbMountOptions:
    r"""SmbMountOptions
    Represents the mount options that are available for DataSync to access an SMB location.
    """
    
    version: Optional[SmbVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
