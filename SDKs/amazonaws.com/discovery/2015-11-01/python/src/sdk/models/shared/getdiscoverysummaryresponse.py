from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDiscoverySummaryResponse:
    agent_summary: Optional[CustomerAgentInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentSummary') }})
    applications: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    connector_summary: Optional[CustomerConnectorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorSummary') }})
    servers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    servers_mapped_to_applications: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serversMappedToApplications') }})
    servers_mappedto_tags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serversMappedtoTags') }})
    
