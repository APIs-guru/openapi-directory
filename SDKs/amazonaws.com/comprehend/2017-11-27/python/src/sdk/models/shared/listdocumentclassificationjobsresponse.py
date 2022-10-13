from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentclassificationjobproperties


@dataclass_json
@dataclass
class ListDocumentClassificationJobsResponse:
    document_classification_job_properties_list: Optional[List[documentclassificationjobproperties.DocumentClassificationJobProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassificationJobPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
