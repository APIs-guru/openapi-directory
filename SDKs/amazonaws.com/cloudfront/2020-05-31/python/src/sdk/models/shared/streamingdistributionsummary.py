from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from . import *


@dataclass
class StreamingDistributionSummary:
    r"""StreamingDistributionSummary
     A summary of the information for a CloudFront streaming distribution.
    """
    
    arn: str = field()
    aliases: Aliases = field()
    comment: str = field()
    domain_name: str = field()
    enabled: bool = field()
    id: str = field()
    last_modified_time: datetime = field()
    price_class: PriceClassEnum = field()
    s3_origin: S3Origin = field()
    status: str = field()
    trusted_signers: TrustedSigners = field()
    
