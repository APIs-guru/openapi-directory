from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class Distribution:
    r"""Distribution
    A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
    """
    
    arn: str = field()
    distribution_config: DistributionConfig = field()
    domain_name: str = field()
    id: str = field()
    in_progress_invalidation_batches: int = field()
    last_modified_time: datetime = field()
    status: str = field()
    active_trusted_key_groups: Optional[ActiveTrustedKeyGroups] = field(default=None)
    active_trusted_signers: Optional[ActiveTrustedSigners] = field(default=None)
    alias_icp_recordals: Optional[List[AliasIcpRecordal]] = field(default=None)
    
