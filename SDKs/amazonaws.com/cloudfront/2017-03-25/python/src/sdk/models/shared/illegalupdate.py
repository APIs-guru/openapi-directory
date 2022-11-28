from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class IllegalUpdate:
    r"""IllegalUpdate
    Origin and <code>CallerReference</code> cannot be updated. 
    """
    
    message: Optional[str] = field(default=None)
    
