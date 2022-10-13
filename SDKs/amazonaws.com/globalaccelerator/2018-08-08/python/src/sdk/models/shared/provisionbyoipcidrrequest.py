from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cidrauthorizationcontext


@dataclass_json
@dataclass
class ProvisionByoipCidrRequest:
    cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cidr' }})
    cidr_authorization_context: cidrauthorizationcontext.CidrAuthorizationContext = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrAuthorizationContext' }})
    
