from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountaggregationsource
from . import organizationaggregationsource
from . import tag


@dataclass_json
@dataclass
class PutConfigurationAggregatorRequest:
    account_aggregation_sources: Optional[List[accountaggregationsource.AccountAggregationSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAggregationSources' }})
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    organization_aggregation_source: Optional[organizationaggregationsource.OrganizationAggregationSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationAggregationSource' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
