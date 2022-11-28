from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ParametersInCacheKeyAndForwardedToOrigin:
    r"""ParametersInCacheKeyAndForwardedToOrigin
    <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find an object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
    """
    
    cookies_config: CachePolicyCookiesConfig = field()
    enable_accept_encoding_gzip: bool = field()
    headers_config: CachePolicyHeadersConfig = field()
    query_strings_config: CachePolicyQueryStringsConfig = field()
    enable_accept_encoding_brotli: Optional[bool] = field(default=None)
    
