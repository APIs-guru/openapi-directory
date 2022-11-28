from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PublicKeySummary:
    r"""PublicKeySummary
     Public key information summary. 
    """
    
    created_time: datetime = field()
    encoded_key: str = field()
    id: str = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    
