from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outgoingcertificate


@dataclass_json
@dataclass
class ListOutgoingCertificatesResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextMarker' }})
    outgoing_certificates: Optional[List[outgoingcertificate.OutgoingCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoingCertificates' }})
    
