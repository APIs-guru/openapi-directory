from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationFlowConfig:
    r"""DestinationFlowConfig
     Contains information about the configuration of destination connectors present in the flow. 
    """
    
    connector_type: ConnectorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    destination_connector_properties: DestinationConnectorProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConnectorProperties') }})
    connector_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    
