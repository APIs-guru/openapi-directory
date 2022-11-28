from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class InvalidationSummary:
    r"""InvalidationSummary
    A summary of an invalidation request.
    """
    
    create_time: datetime = field()
    id: str = field()
    status: str = field()
    
