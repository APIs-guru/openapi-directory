from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServicesResponse:
    service_summary_list: List[ServiceSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceSummaryList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
