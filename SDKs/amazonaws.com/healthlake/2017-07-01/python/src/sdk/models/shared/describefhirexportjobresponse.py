from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import exportjobproperties


@dataclass_json
@dataclass
class DescribeFhirExportJobResponse:
    export_job_properties: exportjobproperties.ExportJobProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportJobProperties' }})
    
