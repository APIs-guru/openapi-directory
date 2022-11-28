from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class DistributionSummary:
    r"""DistributionSummary
    A summary of the information about a CloudFront distribution.
    """
    
    arn: str = field()
    aliases: Aliases = field()
    cache_behaviors: CacheBehaviors = field()
    comment: str = field()
    custom_error_responses: CustomErrorResponses = field()
    default_cache_behavior: DefaultCacheBehavior = field()
    domain_name: str = field()
    enabled: bool = field()
    http_version: HTTPVersionEnum = field()
    id: str = field()
    is_ipv6_enabled: bool = field()
    last_modified_time: datetime = field()
    origins: Origins = field()
    price_class: PriceClassEnum = field()
    restrictions: Restrictions = field()
    status: str = field()
    viewer_certificate: ViewerCertificate = field()
    web_acl_id: str = field()
    origin_groups: Optional[OriginGroups] = field(default=None)
    
