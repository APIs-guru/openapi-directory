from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class CacheBehavior:
    r"""CacheBehavior
    <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html\">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior\">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    """
    
    path_pattern: str = field()
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
    
