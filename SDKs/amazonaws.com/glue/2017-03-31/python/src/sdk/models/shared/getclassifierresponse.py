from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import classifier


@dataclass_json
@dataclass
class GetClassifierResponse:
    classifier: Optional[classifier.Classifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Classifier' }})
    
