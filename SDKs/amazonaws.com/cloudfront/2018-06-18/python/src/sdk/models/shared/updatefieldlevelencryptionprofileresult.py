from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UpdateFieldLevelEncryptionProfileResult:
    field_level_encryption_profile: Optional[FieldLevelEncryptionProfile] = field(default=None)
    
