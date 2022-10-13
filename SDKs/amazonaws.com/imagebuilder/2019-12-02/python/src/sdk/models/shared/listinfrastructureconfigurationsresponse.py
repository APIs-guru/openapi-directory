from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import infrastructureconfigurationsummary


@dataclass_json
@dataclass
class ListInfrastructureConfigurationsResponse:
    infrastructure_configuration_summary_list: Optional[List[infrastructureconfigurationsummary.InfrastructureConfigurationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureConfigurationSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
