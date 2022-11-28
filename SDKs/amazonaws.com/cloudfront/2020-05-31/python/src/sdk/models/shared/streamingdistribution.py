from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class StreamingDistribution:
    r"""StreamingDistribution
    A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
    """
    
    arn: str = field()
    active_trusted_signers: ActiveTrustedSigners = field()
    domain_name: str = field()
    id: str = field()
    status: str = field()
    streaming_distribution_config: StreamingDistributionConfig = field()
    last_modified_time: Optional[datetime] = field(default=None)
    
