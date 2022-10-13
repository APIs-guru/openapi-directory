from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientcertificate


@dataclass_json
@dataclass
class ClientCertificates:
    items: Optional[List[clientcertificate.ClientCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
