from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subjectalternativenames
from . import virtualgatewaylistenertlsvalidationcontexttrust


@dataclass_json
@dataclass
class VirtualGatewayListenerTLSValidationContext:
    subject_alternative_names: Optional[subjectalternativenames.SubjectAlternativeNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    trust: virtualgatewaylistenertlsvalidationcontexttrust.VirtualGatewayListenerTLSValidationContextTrust = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust' }})
    
