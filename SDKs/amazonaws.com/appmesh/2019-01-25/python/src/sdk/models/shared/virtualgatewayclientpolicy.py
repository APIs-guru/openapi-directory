from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualgatewayclientpolicytls


@dataclass_json
@dataclass
class VirtualGatewayClientPolicy:
    tls: Optional[virtualgatewayclientpolicytls.VirtualGatewayClientPolicyTLS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
