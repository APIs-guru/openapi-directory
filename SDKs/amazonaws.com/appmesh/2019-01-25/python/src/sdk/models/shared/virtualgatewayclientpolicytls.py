from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualgatewayclienttlscertificate
from . import virtualgatewaytlsvalidationcontext


@dataclass_json
@dataclass
class VirtualGatewayClientPolicyTLS:
    certificate: Optional[virtualgatewayclienttlscertificate.VirtualGatewayClientTLSCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    enforce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce' }})
    ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    validation: virtualgatewaytlsvalidationcontext.VirtualGatewayTLSValidationContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation' }})
    
