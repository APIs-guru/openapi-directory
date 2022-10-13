from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificate


@dataclass_json
@dataclass
class ListCertificatesByCaResponse:
    certificates: Optional[List[certificate.Certificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificates' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextMarker' }})
    
