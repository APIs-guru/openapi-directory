from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reportdefinition


@dataclass_json
@dataclass
class DescribeReportDefinitionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    report_definitions: Optional[List[reportdefinition.ReportDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportDefinitions' }})
    
