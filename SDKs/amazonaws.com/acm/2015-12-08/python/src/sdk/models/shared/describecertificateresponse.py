from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificatedetail


@dataclass_json
@dataclass
class DescribeCertificateResponse:
    certificate: Optional[certificatedetail.CertificateDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    
