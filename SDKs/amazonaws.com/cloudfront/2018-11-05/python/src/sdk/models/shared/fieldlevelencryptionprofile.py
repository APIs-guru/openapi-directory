from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class FieldLevelEncryptionProfile:
    r"""FieldLevelEncryptionProfile
    A complex data type for field-level encryption profiles.
    """
    
    field_level_encryption_profile_config: FieldLevelEncryptionProfileConfig = field()
    id: str = field()
    last_modified_time: datetime = field()
    
