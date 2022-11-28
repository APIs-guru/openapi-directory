from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VirtualGatewayTLSValidationContextAcmTrust:
    r"""VirtualGatewayTLSValidationContextAcmTrust
    An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.
    """
    
    certificate_authority_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorityArns') }})
    
