from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListAutoScalingConfigurationsRequest:
    auto_scaling_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingConfigurationName' }})
    latest_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestOnly' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
