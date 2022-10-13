from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentclassificationjobproperties


@dataclass_json
@dataclass
class DescribeDocumentClassificationJobResponse:
    document_classification_job_properties: Optional[documentclassificationjobproperties.DocumentClassificationJobProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassificationJobProperties' }})
    
