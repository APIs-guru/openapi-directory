from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importjobproperties


@dataclass_json
@dataclass
class ListFhirImportJobsResponse:
    import_job_properties_list: List[importjobproperties.ImportJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
