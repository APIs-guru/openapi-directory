from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestCertificateRequest:
    domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    domain_validation_options: Optional[List[DomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    options: Optional[CertificateOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    validation_method: Optional[ValidationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationMethod') }})
    
