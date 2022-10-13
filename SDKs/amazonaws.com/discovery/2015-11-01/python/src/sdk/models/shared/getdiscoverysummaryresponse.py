from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customeragentinfo
from . import customerconnectorinfo


@dataclass_json
@dataclass
class GetDiscoverySummaryResponse:
    agent_summary: Optional[customeragentinfo.CustomerAgentInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentSummary' }})
    applications: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    connector_summary: Optional[customerconnectorinfo.CustomerConnectorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorSummary' }})
    servers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servers' }})
    servers_mapped_to_applications: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serversMappedToApplications' }})
    servers_mappedto_tags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serversMappedtoTags' }})
    
