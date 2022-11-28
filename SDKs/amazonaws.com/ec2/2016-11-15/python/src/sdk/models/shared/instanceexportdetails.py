from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceExportDetails:
    r"""InstanceExportDetails
    Describes an instance to export.
    """
    
    instance_id: Optional[str] = field(default=None)
    target_environment: Optional[ExportEnvironmentEnum] = field(default=None)
    
