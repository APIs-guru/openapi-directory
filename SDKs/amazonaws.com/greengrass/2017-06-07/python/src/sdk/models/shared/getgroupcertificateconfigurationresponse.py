from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetGroupCertificateConfigurationResponse:
    certificate_authority_expiry_in_milliseconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityExpiryInMilliseconds') }})
    certificate_expiry_in_milliseconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateExpiryInMilliseconds') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    
