from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificateinfo


@dataclass_json
@dataclass
class ListCertificatesResult:
    certificates_info: Optional[List[certificateinfo.CertificateInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificatesInfo' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
