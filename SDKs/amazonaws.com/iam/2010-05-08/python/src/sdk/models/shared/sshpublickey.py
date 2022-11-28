from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SSHPublicKey:
    r"""SSHPublicKey
    <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
    """
    
    fingerprint: str = field()
    ssh_public_key_body: str = field()
    ssh_public_key_id: str = field()
    status: StatusTypeEnum = field()
    user_name: str = field()
    upload_date: Optional[datetime] = field(default=None)
    
