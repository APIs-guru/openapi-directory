from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listenertlsfilecertificate
from . import listenertlssdscertificate


@dataclass_json
@dataclass
class ClientTLSCertificate:
    file: Optional[listenertlsfilecertificate.ListenerTLSFileCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[listenertlssdscertificate.ListenerTLSSdsCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
