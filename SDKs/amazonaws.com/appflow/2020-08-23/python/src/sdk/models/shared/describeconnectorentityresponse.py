from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import connectorentityfield


@dataclass_json
@dataclass
class DescribeConnectorEntityResponse:
    connector_entity_fields: List[connectorentityfield.ConnectorEntityField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorEntityFields' }})
    
