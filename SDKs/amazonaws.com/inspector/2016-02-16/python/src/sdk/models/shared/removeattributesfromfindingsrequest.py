from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoveAttributesFromFindingsRequest:
    attribute_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeKeys') }})
    finding_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingArns') }})
    
