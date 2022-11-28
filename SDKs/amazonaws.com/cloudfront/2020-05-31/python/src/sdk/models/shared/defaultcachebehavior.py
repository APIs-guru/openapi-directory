from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DefaultCacheBehavior:
    r"""DefaultCacheBehavior
    A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
    """
    
    target_origin_id: str = field()
    viewer_protocol_policy: ViewerProtocolPolicyEnum = field()
    allowed_methods: Optional[AllowedMethods] = field(default=None)
    cache_policy_id: Optional[str] = field(default=None)
    compress: Optional[bool] = field(default=None)
    default_ttl: Optional[int] = field(default=None)
    field_level_encryption_id: Optional[str] = field(default=None)
    forwarded_values: Optional[ForwardedValues] = field(default=None)
    function_associations: Optional[FunctionAssociations] = field(default=None)
    lambda_function_associations: Optional[LambdaFunctionAssociations] = field(default=None)
    max_ttl: Optional[int] = field(default=None)
    min_ttl: Optional[int] = field(default=None)
    origin_request_policy_id: Optional[str] = field(default=None)
    realtime_log_config_arn: Optional[str] = field(default=None)
    smooth_streaming: Optional[bool] = field(default=None)
    trusted_key_groups: Optional[TrustedKeyGroups] = field(default=None)
    trusted_signers: Optional[TrustedSigners] = field(default=None)
    
