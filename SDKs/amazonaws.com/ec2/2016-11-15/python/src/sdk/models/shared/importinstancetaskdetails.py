from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ImportInstanceTaskDetails:
    r"""ImportInstanceTaskDetails
    Describes an import instance task.
    """
    
    description: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    platform: Optional[PlatformValuesEnum] = field(default=None)
    volumes: Optional[List[ImportInstanceVolumeDetailItem]] = field(default=None)
    
