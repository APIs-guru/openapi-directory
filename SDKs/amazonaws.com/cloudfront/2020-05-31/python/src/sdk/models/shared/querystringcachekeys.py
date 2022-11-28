from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class QueryStringCacheKeys:
    r"""QueryStringCacheKeys
    <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. </p>
    """
    
    quantity: int = field()
    items: Optional[List[str]] = field(default=None)
    
