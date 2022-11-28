from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CloudFrontOriginAccessIdentity:
    r"""CloudFrontOriginAccessIdentity
    CloudFront origin access identity.
    """
    
    id: str = field()
    s3_canonical_user_id: str = field()
    cloud_front_origin_access_identity_config: Optional[CloudFrontOriginAccessIdentityConfig] = field(default=None)
    
