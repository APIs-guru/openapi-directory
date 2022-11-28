from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class FieldLevelEncryption:
    r"""FieldLevelEncryption
    A complex data type that includes the profile configurations and other options specified for field-level encryption. 
    """
    
    field_level_encryption_config: FieldLevelEncryptionConfig = field()
    id: str = field()
    last_modified_time: datetime = field()
    
