from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CachePolicyConfig:
    r"""CachePolicyConfig
    <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find a valid object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
    """
    
    min_ttl: int = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    default_ttl: Optional[int] = field(default=None)
    max_ttl: Optional[int] = field(default=None)
    parameters_in_cache_key_and_forwarded_to_origin: Optional[ParametersInCacheKeyAndForwardedToOrigin] = field(default=None)
    
