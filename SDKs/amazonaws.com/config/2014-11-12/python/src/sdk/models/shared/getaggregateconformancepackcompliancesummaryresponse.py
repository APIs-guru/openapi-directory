from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAggregateConformancePackComplianceSummaryResponse:
    aggregate_conformance_pack_compliance_summaries: Optional[List[AggregateConformancePackComplianceSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregateConformancePackComplianceSummaries') }})
    group_by_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByKey') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
