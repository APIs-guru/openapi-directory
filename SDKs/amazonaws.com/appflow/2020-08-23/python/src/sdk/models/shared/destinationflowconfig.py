from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectortype_enum
from . import destinationconnectorproperties


@dataclass_json
@dataclass
class DestinationFlowConfig:
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorProfileName' }})
    connector_type: connectortype_enum.ConnectorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorType' }})
    destination_connector_properties: destinationconnectorproperties.DestinationConnectorProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConnectorProperties' }})
    
