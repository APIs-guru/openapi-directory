from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class CookieNames:
    r"""CookieNames
    A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html\"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
