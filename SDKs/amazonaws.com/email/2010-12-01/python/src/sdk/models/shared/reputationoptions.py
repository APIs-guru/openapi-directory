from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ReputationOptions:
    r"""ReputationOptions
    Contains information about the reputation settings for a configuration set.
    """
    
    last_fresh_start: Optional[datetime] = field(default=None)
    reputation_metrics_enabled: Optional[bool] = field(default=None)
    sending_enabled: Optional[bool] = field(default=None)
    
