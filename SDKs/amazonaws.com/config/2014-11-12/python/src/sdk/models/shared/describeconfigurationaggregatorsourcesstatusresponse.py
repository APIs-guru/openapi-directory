from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregatedsourcestatus


@dataclass_json
@dataclass
class DescribeConfigurationAggregatorSourcesStatusResponse:
    aggregated_source_status_list: Optional[List[aggregatedsourcestatus.AggregatedSourceStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregatedSourceStatusList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
