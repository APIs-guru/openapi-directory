from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subjectalternativenames
from . import virtualgatewaytlsvalidationcontexttrust


@dataclass_json
@dataclass
class VirtualGatewayTLSValidationContext:
    subject_alternative_names: Optional[subjectalternativenames.SubjectAlternativeNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    trust: virtualgatewaytlsvalidationcontexttrust.VirtualGatewayTLSValidationContextTrust = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust' }})
    
