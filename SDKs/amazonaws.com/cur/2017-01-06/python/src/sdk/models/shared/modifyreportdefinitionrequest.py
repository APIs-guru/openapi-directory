from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyReportDefinitionRequest:
    report_definition: ReportDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDefinition') }})
    report_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportName') }})
    
