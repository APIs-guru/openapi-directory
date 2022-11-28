from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CloudFrontOriginAccessIdentityInUse:
    message: Optional[str] = field(default=None)
    
