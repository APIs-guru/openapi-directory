from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import revocationreason_enum


@dataclass_json
@dataclass
class RevokeCertificateRequest:
    certificate_authority_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateAuthorityArn' }})
    certificate_serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertificateSerial' }})
    revocation_reason: revocationreason_enum.RevocationReasonEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RevocationReason' }})
    
