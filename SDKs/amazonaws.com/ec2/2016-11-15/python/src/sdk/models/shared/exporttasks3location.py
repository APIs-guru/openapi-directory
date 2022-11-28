from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportTaskS3Location:
    r"""ExportTaskS3Location
    Describes the destination for an export image task.
    """
    
    s3_bucket: Optional[str] = field(default=None)
    s3_prefix: Optional[str] = field(default=None)
    
