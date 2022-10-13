from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import finding


@dataclass_json
@dataclass
class GetFindingResponse:
    finding: Optional[finding.Finding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finding' }})
    
