from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCertificateAuthorityRequest:
    certificate_authority_configuration: CertificateAuthorityConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityConfiguration') }})
    certificate_authority_type: CertificateAuthorityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityType') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    key_storage_security_standard: Optional[KeyStorageSecurityStandardEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyStorageSecurityStandard') }})
    revocation_configuration: Optional[RevocationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
