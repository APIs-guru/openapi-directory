from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFhirExportJobResponse:
    export_job_properties: ExportJobProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobProperties') }})
    
