from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Listener:
    r"""Listener
    An object that represents a listener for a virtual node.
    """
    
    port_mapping: PortMapping = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    connection_pool: Optional[VirtualNodeConnectionPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionPool') }})
    health_check: Optional[HealthCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    outlier_detection: Optional[OutlierDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlierDetection') }})
    timeout: Optional[ListenerTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    tls: Optional[ListenerTLS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
