from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifyEbsDefaultKmsKeyIDResult:
    kms_key_id: Optional[str] = field(default=None)
    
