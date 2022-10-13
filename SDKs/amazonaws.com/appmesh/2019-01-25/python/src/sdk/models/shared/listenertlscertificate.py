from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listenertlsacmcertificate
from . import listenertlsfilecertificate
from . import listenertlssdscertificate


@dataclass_json
@dataclass
class ListenerTLSCertificate:
    acm: Optional[listenertlsacmcertificate.ListenerTLSAcmCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acm' }})
    file: Optional[listenertlsfilecertificate.ListenerTLSFileCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[listenertlssdscertificate.ListenerTLSSdsCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
