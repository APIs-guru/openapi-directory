from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ExportImageTask:
    r"""ExportImageTask
    Describes an export image task.
    """
    
    description: Optional[str] = field(default=None)
    export_image_task_id: Optional[str] = field(default=None)
    image_id: Optional[str] = field(default=None)
    progress: Optional[str] = field(default=None)
    s3_export_location: Optional[ExportTaskS3Location] = field(default=None)
    status: Optional[str] = field(default=None)
    status_message: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
