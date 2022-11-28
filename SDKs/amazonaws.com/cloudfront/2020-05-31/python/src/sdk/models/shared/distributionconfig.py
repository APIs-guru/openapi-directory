from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DistributionConfig:
    r"""DistributionConfig
    A distribution configuration.
    """
    
    caller_reference: str = field()
    comment: str = field()
    default_cache_behavior: DefaultCacheBehavior = field()
    enabled: bool = field()
    origins: Origins = field()
    aliases: Optional[Aliases] = field(default=None)
    cache_behaviors: Optional[CacheBehaviors] = field(default=None)
    custom_error_responses: Optional[CustomErrorResponses] = field(default=None)
    default_root_object: Optional[str] = field(default=None)
    http_version: Optional[HTTPVersionEnum] = field(default=None)
    is_ipv6_enabled: Optional[bool] = field(default=None)
    logging: Optional[LoggingConfig] = field(default=None)
    origin_groups: Optional[OriginGroups] = field(default=None)
    price_class: Optional[PriceClassEnum] = field(default=None)
    restrictions: Optional[Restrictions] = field(default=None)
    viewer_certificate: Optional[ViewerCertificate] = field(default=None)
    web_acl_id: Optional[str] = field(default=None)
    
