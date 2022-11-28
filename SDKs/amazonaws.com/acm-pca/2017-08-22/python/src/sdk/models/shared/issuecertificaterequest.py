from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IssueCertificateRequest:
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    csr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Csr') }})
    signing_algorithm: SigningAlgorithmEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    validity: Validity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validity') }})
    api_passthrough: Optional[APIPassthrough] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiPassthrough') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateArn') }})
    validity_not_before: Optional[Validity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidityNotBefore') }})
    
