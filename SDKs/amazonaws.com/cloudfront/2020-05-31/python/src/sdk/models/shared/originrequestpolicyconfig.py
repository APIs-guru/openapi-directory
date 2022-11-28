from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class OriginRequestPolicyConfig:
    r"""OriginRequestPolicyConfig
    <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
    """
    
    cookies_config: OriginRequestPolicyCookiesConfig = field()
    headers_config: OriginRequestPolicyHeadersConfig = field()
    name: str = field()
    query_strings_config: OriginRequestPolicyQueryStringsConfig = field()
    comment: Optional[str] = field(default=None)
    
