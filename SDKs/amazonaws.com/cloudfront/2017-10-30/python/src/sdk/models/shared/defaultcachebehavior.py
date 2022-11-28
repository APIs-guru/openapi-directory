from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DefaultCacheBehavior:
    r"""DefaultCacheBehavior
    A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
    """
    
    forwarded_values: ForwardedValues = field()
    min_ttl: int = field()
    target_origin_id: str = field()
    trusted_signers: TrustedSigners = field()
    viewer_protocol_policy: ViewerProtocolPolicyEnum = field()
    allowed_methods: Optional[AllowedMethods] = field(default=None)
    compress: Optional[bool] = field(default=None)
    default_ttl: Optional[int] = field(default=None)
    field_level_encryption_id: Optional[str] = field(default=None)
    lambda_function_associations: Optional[LambdaFunctionAssociations] = field(default=None)
    max_ttl: Optional[int] = field(default=None)
    smooth_streaming: Optional[bool] = field(default=None)
    
