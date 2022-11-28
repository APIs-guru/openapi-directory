from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from . import *


@dataclass
class SSHPublicKeyMetadata:
    r"""SSHPublicKeyMetadata
    <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
    """
    
    ssh_public_key_id: str = field()
    status: StatusTypeEnum = field()
    upload_date: datetime = field()
    user_name: str = field()
    
