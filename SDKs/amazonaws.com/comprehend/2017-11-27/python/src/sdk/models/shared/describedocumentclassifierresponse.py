from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentclassifierproperties


@dataclass_json
@dataclass
class DescribeDocumentClassifierResponse:
    document_classifier_properties: Optional[documentclassifierproperties.DocumentClassifierProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassifierProperties' }})
    
