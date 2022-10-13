from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exportjobproperties


@dataclass_json
@dataclass
class ListFhirExportJobsResponse:
    export_job_properties_list: List[exportjobproperties.ExportJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
