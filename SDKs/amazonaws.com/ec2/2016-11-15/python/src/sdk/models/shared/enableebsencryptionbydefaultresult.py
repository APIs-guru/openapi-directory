from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EnableEbsEncryptionByDefaultResult:
    ebs_encryption_by_default: Optional[bool] = field(default=None)
    
