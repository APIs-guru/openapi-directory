from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletePermissionRequest:
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    principal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    source_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAccount' }})
    
