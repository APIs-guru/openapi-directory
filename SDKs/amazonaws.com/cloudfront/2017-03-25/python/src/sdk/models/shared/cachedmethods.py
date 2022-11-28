from dataclasses import dataclass, field
from typing import List
from enum import Enum
from . import *


@dataclass
class CachedMethods:
    r"""CachedMethods
    <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p>
    """
    
    items: List[MethodEnum] = field()
    quantity: int = field()
    
