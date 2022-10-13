from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import reportdefinition


@dataclass_json
@dataclass
class ModifyReportDefinitionRequest:
    report_definition: reportdefinition.ReportDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportDefinition' }})
    report_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportName' }})
    
