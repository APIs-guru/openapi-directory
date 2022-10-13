from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupCertificateAuthorityProperties:
    group_certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupCertificateAuthorityArn' }})
    group_certificate_authority_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupCertificateAuthorityId' }})
    
