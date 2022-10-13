from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entityrecognizerproperties


@dataclass_json
@dataclass
class ListEntityRecognizersResponse:
    entity_recognizer_properties_list: Optional[List[entityrecognizerproperties.EntityRecognizerProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityRecognizerPropertiesList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
