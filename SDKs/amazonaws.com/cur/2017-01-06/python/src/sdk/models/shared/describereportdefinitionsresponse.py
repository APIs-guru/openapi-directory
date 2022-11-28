from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeReportDefinitionsResponse:
    r"""DescribeReportDefinitionsResponse
    If the action is successful, the service sends back an HTTP 200 response.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    report_definitions: Optional[List[ReportDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDefinitions') }})
    
