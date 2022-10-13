from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OperatorNormalizationOptionEnum(str, Enum):
    BASIC = "basic"


@dataclass_json
@dataclass
class OperatorNormalization:
    option: Optional[OperatorNormalizationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    
