from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class SigningCertificate:
    r"""SigningCertificate
    <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
    """
    
    certificate_body: str = field()
    certificate_id: str = field()
    status: StatusTypeEnum = field()
    user_name: str = field()
    upload_date: Optional[datetime] = field(default=None)
    
