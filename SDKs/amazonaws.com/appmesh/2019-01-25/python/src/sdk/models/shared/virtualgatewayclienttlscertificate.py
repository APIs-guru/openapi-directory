from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewaylistenertlsfilecertificate
from . import virtualgatewaylistenertlssdscertificate


@dataclass_json
@dataclass
class VirtualGatewayClientTLSCertificate:
    file: Optional[virtualgatewaylistenertlsfilecertificate.VirtualGatewayListenerTLSFileCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[virtualgatewaylistenertlssdscertificate.VirtualGatewayListenerTLSSdsCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
