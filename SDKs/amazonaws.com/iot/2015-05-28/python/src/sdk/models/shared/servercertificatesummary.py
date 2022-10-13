from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servercertificatestatus_enum


@dataclass_json
@dataclass
class ServerCertificateSummary:
    server_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCertificateArn' }})
    server_certificate_status: Optional[servercertificatestatus_enum.ServerCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCertificateStatus' }})
    server_certificate_status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCertificateStatusDetail' }})
    
