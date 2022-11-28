from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class Distribution:
    r"""Distribution
    The distribution's information.
    """
    
    arn: str = field()
    active_trusted_signers: ActiveTrustedSigners = field()
    distribution_config: DistributionConfig = field()
    domain_name: str = field()
    id: str = field()
    in_progress_invalidation_batches: int = field()
    last_modified_time: datetime = field()
    status: str = field()
    
