from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configrulecompliancesummaryfilters
from . import configrulecompliancesummarygroupkey_enum


@dataclass_json
@dataclass
class GetAggregateConfigRuleComplianceSummaryRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    filters: Optional[configrulecompliancesummaryfilters.ConfigRuleComplianceSummaryFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    group_by_key: Optional[configrulecompliancesummarygroupkey_enum.ConfigRuleComplianceSummaryGroupKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByKey' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
