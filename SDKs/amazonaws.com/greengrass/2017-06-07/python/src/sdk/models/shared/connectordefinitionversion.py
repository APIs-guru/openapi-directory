from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connector


@dataclass_json
@dataclass
class ConnectorDefinitionVersion:
    connectors: Optional[List[connector.Connector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Connectors' }})
    
