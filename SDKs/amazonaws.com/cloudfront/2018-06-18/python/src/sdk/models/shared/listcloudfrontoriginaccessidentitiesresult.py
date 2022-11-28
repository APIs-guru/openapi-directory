from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ListCloudFrontOriginAccessIdentitiesResult:
    r"""ListCloudFrontOriginAccessIdentitiesResult
    The returned result of the corresponding request. 
    """
    
    cloud_front_origin_access_identity_list: Optional[CloudFrontOriginAccessIdentityList] = field(default=None)
    
