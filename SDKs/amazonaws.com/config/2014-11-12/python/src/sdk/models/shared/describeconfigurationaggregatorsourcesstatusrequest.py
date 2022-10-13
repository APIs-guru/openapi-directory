from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import aggregatedsourcestatustype_enum


@dataclass_json
@dataclass
class DescribeConfigurationAggregatorSourcesStatusRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    update_status: Optional[List[aggregatedsourcestatustype_enum.AggregatedSourceStatusTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateStatus' }})
    
