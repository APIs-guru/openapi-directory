from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentclassifierproperties


@dataclass_json
@dataclass
class ListDocumentClassifiersResponse:
    document_classifier_properties_list: Optional[List[documentclassifierproperties.DocumentClassifierProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentClassifierPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
