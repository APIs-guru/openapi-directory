from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualnodeconnectionpool
from . import healthcheckpolicy
from . import outlierdetection
from . import portmapping
from . import listenertimeout
from . import listenertls


@dataclass_json
@dataclass
class Listener:
    connection_pool: Optional[virtualnodeconnectionpool.VirtualNodeConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionPool' }})
    health_check: Optional[healthcheckpolicy.HealthCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    outlier_detection: Optional[outlierdetection.OutlierDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlierDetection' }})
    port_mapping: portmapping.PortMapping = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portMapping' }})
    timeout: Optional[listenertimeout.ListenerTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    tls: Optional[listenertls.ListenerTLS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls' }})
    
