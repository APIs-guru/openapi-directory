from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AccessKey:
    r"""AccessKey
    <p>Contains information about an Amazon Web Services access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
    """
    
    access_key_id: str = field()
    secret_access_key: str = field()
    status: StatusTypeEnum = field()
    user_name: str = field()
    create_date: Optional[datetime] = field(default=None)
    
