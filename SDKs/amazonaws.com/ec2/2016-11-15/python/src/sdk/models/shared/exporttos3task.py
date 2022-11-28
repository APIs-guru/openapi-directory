from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ExportToS3Task:
    r"""ExportToS3Task
    Describes the format and location for the export task.
    """
    
    container_format: Optional[ContainerFormatEnum] = field(default=None)
    disk_image_format: Optional[DiskImageFormatEnum] = field(default=None)
    s3_bucket: Optional[str] = field(default=None)
    s3_key: Optional[str] = field(default=None)
    
