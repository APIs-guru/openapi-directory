from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import distributionconfigurationsummary


@dataclass_json
@dataclass
class ListDistributionConfigurationsResponse:
    distribution_configuration_summary_list: Optional[List[distributionconfigurationsummary.DistributionConfigurationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionConfigurationSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
