from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import attribute


@dataclass_json
@dataclass
class AddAttributesToFindingsRequest:
    attributes: List[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    finding_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingArns' }})
    
