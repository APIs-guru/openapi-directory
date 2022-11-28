from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KubernetesNetworkConfigResponse:
    r"""KubernetesNetworkConfigResponse
    The Kubernetes network configuration for the cluster.
    """
    
    service_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceIpv4Cidr') }})
    
