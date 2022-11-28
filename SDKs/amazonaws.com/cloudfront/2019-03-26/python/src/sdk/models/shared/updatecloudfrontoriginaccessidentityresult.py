from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateCloudFrontOriginAccessIdentityResult:
    r"""UpdateCloudFrontOriginAccessIdentityResult
    The returned result of the corresponding request.
    """
    
    cloud_front_origin_access_identity: Optional[CloudFrontOriginAccessIdentity] = field(default=None)
    
