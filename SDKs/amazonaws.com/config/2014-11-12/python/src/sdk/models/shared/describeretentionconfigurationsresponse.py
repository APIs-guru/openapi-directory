from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import retentionconfiguration


@dataclass_json
@dataclass
class DescribeRetentionConfigurationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    retention_configurations: Optional[List[retentionconfiguration.RetentionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetentionConfigurations' }})
    
