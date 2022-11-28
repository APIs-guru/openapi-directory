from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportCertificateAuthorityCertificateRequest:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateChain') }})
    
