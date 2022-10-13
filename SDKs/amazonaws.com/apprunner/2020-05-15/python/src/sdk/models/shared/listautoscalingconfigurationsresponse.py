from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalingconfigurationsummary


@dataclass_json
@dataclass
class ListAutoScalingConfigurationsResponse:
    auto_scaling_configuration_summary_list: List[autoscalingconfigurationsummary.AutoScalingConfigurationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
