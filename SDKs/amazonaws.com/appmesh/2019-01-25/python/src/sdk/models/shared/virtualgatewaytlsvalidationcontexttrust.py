from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualgatewaytlsvalidationcontextacmtrust
from . import virtualgatewaytlsvalidationcontextfiletrust
from . import virtualgatewaytlsvalidationcontextsdstrust


@dataclass_json
@dataclass
class VirtualGatewayTLSValidationContextTrust:
    acm: Optional[virtualgatewaytlsvalidationcontextacmtrust.VirtualGatewayTLSValidationContextAcmTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acm' }})
    file: Optional[virtualgatewaytlsvalidationcontextfiletrust.VirtualGatewayTLSValidationContextFileTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    sds: Optional[virtualgatewaytlsvalidationcontextsdstrust.VirtualGatewayTLSValidationContextSdsTrust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sds' }})
    
