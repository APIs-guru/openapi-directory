from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetCloudFrontOriginAccessIdentityConfigResult:
    r"""GetCloudFrontOriginAccessIdentityConfigResult
    The returned result of the corresponding request.
    """
    
    cloud_front_origin_access_identity_config: Optional[CloudFrontOriginAccessIdentityConfig] = field(default=None)
    
