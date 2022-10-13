from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteCertificateAuthorityRequest:
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    permanent_deletion_time_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermanentDeletionTimeInDays' }})
    
