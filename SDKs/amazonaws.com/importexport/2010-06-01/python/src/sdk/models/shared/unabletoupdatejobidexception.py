from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class UnableToUpdateJobIDException:
    r"""UnableToUpdateJobIDException
    AWS Import/Export cannot update the job
    """
    
    message: Optional[str] = field(default=None)
    
