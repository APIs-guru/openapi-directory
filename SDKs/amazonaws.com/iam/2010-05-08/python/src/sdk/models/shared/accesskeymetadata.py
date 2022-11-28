from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AccessKeyMetadata:
    r"""AccessKeyMetadata
    <p>Contains information about an Amazon Web Services access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
    """
    
    access_key_id: Optional[str] = field(default=None)
    create_date: Optional[datetime] = field(default=None)
    status: Optional[StatusTypeEnum] = field(default=None)
    user_name: Optional[str] = field(default=None)
    
