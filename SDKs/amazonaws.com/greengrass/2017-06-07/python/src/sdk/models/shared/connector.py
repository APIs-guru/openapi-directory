from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Connector:
    connector_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectorArn' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
