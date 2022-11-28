from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class IDFormat:
    r"""IDFormat
    Describes the ID format for a resource.
    """
    
    deadline: Optional[datetime] = field(default=None)
    resource: Optional[str] = field(default=None)
    use_long_ids: Optional[bool] = field(default=None)
    
