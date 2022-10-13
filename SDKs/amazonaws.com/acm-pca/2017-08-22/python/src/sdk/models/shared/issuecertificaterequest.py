from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apipassthrough
from . import signingalgorithm_enum
from . import validity
from . import validity


@dataclass_json
@dataclass
class IssueCertificateRequest:
    api_passthrough: Optional[apipassthrough.APIPassthrough] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiPassthrough' }})
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    csr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Csr' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    signing_algorithm: signingalgorithm_enum.SigningAlgorithmEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithm' }})
    template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateArn' }})
    validity: validity.Validity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validity' }})
    validity_not_before: Optional[validity.Validity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidityNotBefore' }})
    
