from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectorConfiguration:
    r"""ConnectorConfiguration
     The configuration settings related to a given connector. 
    """
    
    can_use_as_destination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUseAsDestination') }})
    can_use_as_source: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUseAsSource') }})
    connector_metadata: Optional[ConnectorMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorMetadata') }})
    is_private_link_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrivateLinkEnabled') }})
    is_private_link_endpoint_url_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrivateLinkEndpointUrlRequired') }})
    supported_destination_connectors: Optional[List[ConnectorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedDestinationConnectors') }})
    supported_scheduling_frequencies: Optional[List[ScheduleFrequencyTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedSchedulingFrequencies') }})
    supported_trigger_types: Optional[List[TriggerTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedTriggerTypes') }})
    
