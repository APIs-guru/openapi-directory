from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class FieldLevelEncryptionSummary:
    r"""FieldLevelEncryptionSummary
    A summary of a field-level encryption item.
    """
    
    id: str = field()
    last_modified_time: datetime = field()
    comment: Optional[str] = field(default=None)
    content_type_profile_config: Optional[ContentTypeProfileConfig] = field(default=None)
    query_arg_profile_config: Optional[QueryArgProfileConfig] = field(default=None)
    
