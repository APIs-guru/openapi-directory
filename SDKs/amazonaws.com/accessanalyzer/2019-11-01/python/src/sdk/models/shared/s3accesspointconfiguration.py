from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkoriginconfiguration
from . import s3publicaccessblockconfiguration


@dataclass_json
@dataclass
class S3AccessPointConfiguration:
    access_point_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPointPolicy' }})
    network_origin: Optional[networkoriginconfiguration.NetworkOriginConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkOrigin' }})
    public_access_block: Optional[s3publicaccessblockconfiguration.S3PublicAccessBlockConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicAccessBlock' }})
    
