from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ServerCertificateMetadata:
    r"""ServerCertificateMetadata
    <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
    """
    
    arn: str = field()
    path: str = field()
    server_certificate_id: str = field()
    server_certificate_name: str = field()
    expiration: Optional[datetime] = field(default=None)
    upload_date: Optional[datetime] = field(default=None)
    
