from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetCloudFrontOriginAccessIdentityResult:
    r"""GetCloudFrontOriginAccessIdentityResult
    The returned result of the corresponding request.
    """
    
    cloud_front_origin_access_identity: Optional[CloudFrontOriginAccessIdentity] = field(default=None)
    
