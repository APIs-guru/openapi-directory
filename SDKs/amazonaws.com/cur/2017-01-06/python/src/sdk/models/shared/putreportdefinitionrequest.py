from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import reportdefinition


@dataclass_json
@dataclass
class PutReportDefinitionRequest:
    report_definition: reportdefinition.ReportDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportDefinition' }})
    
