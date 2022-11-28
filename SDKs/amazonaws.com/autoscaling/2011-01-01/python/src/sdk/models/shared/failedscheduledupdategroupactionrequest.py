from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class FailedScheduledUpdateGroupActionRequest:
    r"""FailedScheduledUpdateGroupActionRequest
    Describes a scheduled action that could not be created, updated, or deleted.
    """
    
    scheduled_action_name: str = field()
    error_code: Optional[str] = field(default=None)
    error_message: Optional[str] = field(default=None)
    
