from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class FieldLevelEncryptionProfileSummary:
    r"""FieldLevelEncryptionProfileSummary
    The field-level encryption profile summary.
    """
    
    encryption_entities: EncryptionEntities = field()
    id: str = field()
    last_modified_time: datetime = field()
    name: str = field()
    comment: Optional[str] = field(default=None)
    
