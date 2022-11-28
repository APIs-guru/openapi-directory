from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from . import *


@dataclass
class PublicKey:
    r"""PublicKey
    A complex data type of public keys you add to CloudFront to use with features like field-level encryption.
    """
    
    created_time: datetime = field()
    id: str = field()
    public_key_config: PublicKeyConfig = field()
    
