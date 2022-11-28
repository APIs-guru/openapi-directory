from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateStorageLocationResultMessage:
    r"""CreateStorageLocationResultMessage
    Results of a <a>CreateStorageLocationResult</a> call.
    """
    
    s3_bucket: Optional[str] = field(default=None)
    
