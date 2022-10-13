from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import importjobproperties


@dataclass_json
@dataclass
class DescribeFhirImportJobResponse:
    import_job_properties: importjobproperties.ImportJobProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportJobProperties' }})
    
