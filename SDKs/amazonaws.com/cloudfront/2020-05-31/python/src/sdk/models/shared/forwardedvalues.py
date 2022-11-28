from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ForwardedValues:
    r"""ForwardedValues
    <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
    """
    
    cookies: CookiePreference = field()
    query_string: bool = field()
    headers: Optional[Headers] = field(default=None)
    query_string_cache_keys: Optional[QueryStringCacheKeys] = field(default=None)
    
