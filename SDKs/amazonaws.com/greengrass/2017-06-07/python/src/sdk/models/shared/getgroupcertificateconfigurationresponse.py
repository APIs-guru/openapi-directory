from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetGroupCertificateConfigurationResponse:
    certificate_authority_expiry_in_milliseconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityExpiryInMilliseconds' }})
    certificate_expiry_in_milliseconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateExpiryInMilliseconds' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    
