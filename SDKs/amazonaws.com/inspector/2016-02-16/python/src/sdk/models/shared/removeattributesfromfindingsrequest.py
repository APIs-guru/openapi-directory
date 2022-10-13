from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveAttributesFromFindingsRequest:
    attribute_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeKeys' }})
    finding_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingArns' }})
    
