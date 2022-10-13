from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cacertificate


@dataclass_json
@dataclass
class ListCaCertificatesResponse:
    certificates: Optional[List[cacertificate.CaCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextMarker' }})
    
