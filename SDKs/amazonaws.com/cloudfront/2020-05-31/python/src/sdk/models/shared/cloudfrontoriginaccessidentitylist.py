from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CloudFrontOriginAccessIdentityList:
    r"""CloudFrontOriginAccessIdentityList
    Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.
    """
    
    is_truncated: bool = field()
    marker: str = field()
    max_items: int = field()
    quantity: int = field()
    items: Optional[List[CloudFrontOriginAccessIdentitySummary]] = field(default=None)
    next_marker: Optional[str] = field(default=None)
    
