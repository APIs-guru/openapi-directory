from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import entityrecognizerproperties


@dataclass_json
@dataclass
class DescribeEntityRecognizerResponse:
    entity_recognizer_properties: Optional[entityrecognizerproperties.EntityRecognizerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityRecognizerProperties' }})
    
