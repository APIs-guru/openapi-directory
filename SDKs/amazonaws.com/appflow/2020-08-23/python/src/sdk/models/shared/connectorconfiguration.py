from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectormetadata
from . import connectortype_enum
from . import schedulefrequencytype_enum
from . import triggertype_enum


@dataclass_json
@dataclass
class ConnectorConfiguration:
    can_use_as_destination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUseAsDestination' }})
    can_use_as_source: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUseAsSource' }})
    connector_metadata: Optional[connectormetadata.ConnectorMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorMetadata' }})
    is_private_link_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrivateLinkEnabled' }})
    is_private_link_endpoint_url_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrivateLinkEndpointUrlRequired' }})
    supported_destination_connectors: Optional[List[connectortype_enum.ConnectorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedDestinationConnectors' }})
    supported_scheduling_frequencies: Optional[List[schedulefrequencytype_enum.ScheduleFrequencyTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedSchedulingFrequencies' }})
    supported_trigger_types: Optional[List[triggertype_enum.TriggerTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedTriggerTypes' }})
    
