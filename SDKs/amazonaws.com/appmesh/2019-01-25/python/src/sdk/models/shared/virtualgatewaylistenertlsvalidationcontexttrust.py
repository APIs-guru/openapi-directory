from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewaytlsvalidationcontextfiletrust
from . import virtualgatewaytlsvalidationcontextsdstrust


@dataclass_json
@dataclass
class VirtualGatewayListenerTLSValidationContextTrust:
    file: Optional[virtualgatewaytlsvalidationcontextfiletrust.VirtualGatewayTLSValidationContextFileTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[virtualgatewaytlsvalidationcontextsdstrust.VirtualGatewayTLSValidationContextSdsTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
