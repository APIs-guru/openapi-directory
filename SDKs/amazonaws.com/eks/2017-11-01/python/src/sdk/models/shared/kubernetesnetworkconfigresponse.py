from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KubernetesNetworkConfigResponse:
    service_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceIpv4Cidr' }})
    
