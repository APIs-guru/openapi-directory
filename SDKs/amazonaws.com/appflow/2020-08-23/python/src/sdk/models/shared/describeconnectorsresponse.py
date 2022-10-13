from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectorconfiguration


@dataclass_json
@dataclass
class DescribeConnectorsResponse:
    connector_configurations: Optional[dict[str, connectorconfiguration.ConnectorConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorConfigurations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
