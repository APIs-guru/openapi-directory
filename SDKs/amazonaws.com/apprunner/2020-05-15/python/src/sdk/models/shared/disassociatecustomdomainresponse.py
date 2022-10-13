from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import customdomain


@dataclass_json
@dataclass
class DisassociateCustomDomainResponse:
    custom_domain: customdomain.CustomDomain = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomDomain' }})
    dns_target: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DNSTarget' }})
    service_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    
