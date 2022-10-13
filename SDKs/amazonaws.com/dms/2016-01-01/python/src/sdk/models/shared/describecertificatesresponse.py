from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificate


@dataclass_json
@dataclass
class DescribeCertificatesResponse:
    certificates: Optional[List[certificate.Certificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificates' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
