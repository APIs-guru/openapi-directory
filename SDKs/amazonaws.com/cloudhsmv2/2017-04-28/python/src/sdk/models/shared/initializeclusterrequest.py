from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InitializeClusterRequest:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    signed_cert: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignedCert' }})
    trust_anchor: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustAnchor' }})
    
