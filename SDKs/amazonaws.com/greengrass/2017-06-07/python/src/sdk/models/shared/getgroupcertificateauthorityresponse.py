from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetGroupCertificateAuthorityResponse:
    group_certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupCertificateAuthorityArn' }})
    group_certificate_authority_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupCertificateAuthorityId' }})
    pem_encoded_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PemEncodedCertificate' }})
    
