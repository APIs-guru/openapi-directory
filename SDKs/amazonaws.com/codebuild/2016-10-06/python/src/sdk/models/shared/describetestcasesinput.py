from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testcasefilter


@dataclass_json
@dataclass
class DescribeTestCasesInput:
    filter: Optional[testcasefilter.TestCaseFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    report_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportArn' }})
    
