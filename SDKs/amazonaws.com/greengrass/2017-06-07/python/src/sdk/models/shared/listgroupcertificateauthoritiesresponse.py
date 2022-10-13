from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupcertificateauthorityproperties


@dataclass_json
@dataclass
class ListGroupCertificateAuthoritiesResponse:
    group_certificate_authorities: Optional[List[groupcertificateauthorityproperties.GroupCertificateAuthorityProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupCertificateAuthorities' }})
    
