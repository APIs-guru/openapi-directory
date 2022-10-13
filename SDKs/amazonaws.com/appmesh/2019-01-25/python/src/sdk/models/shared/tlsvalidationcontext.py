from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subjectalternativenames
from . import tlsvalidationcontexttrust


@dataclass_json
@dataclass
class TLSValidationContext:
    subject_alternative_names: Optional[subjectalternativenames.SubjectAlternativeNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    trust: tlsvalidationcontexttrust.TLSValidationContextTrust = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust' }})
    
