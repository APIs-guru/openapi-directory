from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentclass
from . import documentlabel


@dataclass_json
@dataclass
class ClassifyDocumentResponse:
    classes: Optional[List[documentclass.DocumentClass]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classes' }})
    labels: Optional[List[documentlabel.DocumentLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    
