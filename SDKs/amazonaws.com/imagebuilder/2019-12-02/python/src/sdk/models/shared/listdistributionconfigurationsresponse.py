from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDistributionConfigurationsResponse:
    distribution_configuration_summary_list: Optional[List[DistributionConfigurationSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionConfigurationSummaryList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
