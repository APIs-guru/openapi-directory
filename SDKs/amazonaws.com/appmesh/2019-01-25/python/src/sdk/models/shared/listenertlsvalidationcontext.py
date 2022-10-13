from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subjectalternativenames
from . import listenertlsvalidationcontexttrust


@dataclass_json
@dataclass
class ListenerTLSValidationContext:
    subject_alternative_names: Optional[subjectalternativenames.SubjectAlternativeNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    trust: listenertlsvalidationcontexttrust.ListenerTLSValidationContextTrust = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust' }})
    
