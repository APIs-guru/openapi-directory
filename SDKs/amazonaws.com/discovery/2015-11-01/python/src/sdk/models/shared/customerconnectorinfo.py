from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerConnectorInfo:
    active_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeConnectors' }})
    black_listed_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blackListedConnectors' }})
    healthy_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthyConnectors' }})
    shutdown_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shutdownConnectors' }})
    total_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalConnectors' }})
    unhealthy_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthyConnectors' }})
    unknown_connectors: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknownConnectors' }})
    
