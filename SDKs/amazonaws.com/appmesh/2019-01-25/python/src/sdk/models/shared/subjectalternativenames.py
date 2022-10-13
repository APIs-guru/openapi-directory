from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import subjectalternativenamematchers


@dataclass_json
@dataclass
class SubjectAlternativeNames:
    match: subjectalternativenamematchers.SubjectAlternativeNameMatchers = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    
