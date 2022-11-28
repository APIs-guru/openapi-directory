from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeletePermissionRequest:
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    principal: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    source_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccount') }})
    
