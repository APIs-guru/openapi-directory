from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dnsservicediscovery


@dataclass_json
@dataclass
class ServiceDiscovery:
    dns: Optional[dnsservicediscovery.DNSServiceDiscovery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns' }})
    
