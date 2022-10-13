from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actiontype_enum


@dataclass_json
@dataclass
class CreatePermissionRequest:
    actions: List[actiontype_enum.ActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    principal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Principal' }})
    source_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAccount' }})
    
