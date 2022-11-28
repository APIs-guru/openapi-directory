from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteCertificateAuthorityRequest:
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    permanent_deletion_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermanentDeletionTimeInDays') }})
    
