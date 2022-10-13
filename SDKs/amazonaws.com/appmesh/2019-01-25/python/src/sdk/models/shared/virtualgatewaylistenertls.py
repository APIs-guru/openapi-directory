from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewaylistenertlscertificate
from . import virtualgatewaylistenertlsmode_enum
from . import virtualgatewaylistenertlsvalidationcontext


@dataclass_json
@dataclass
class VirtualGatewayListenerTLS:
    certificate: virtualgatewaylistenertlscertificate.VirtualGatewayListenerTLSCertificate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    mode: virtualgatewaylistenertlsmode_enum.VirtualGatewayListenerTLSModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    validation: Optional[virtualgatewaylistenertlsvalidationcontext.VirtualGatewayListenerTLSValidationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation' }})
    
