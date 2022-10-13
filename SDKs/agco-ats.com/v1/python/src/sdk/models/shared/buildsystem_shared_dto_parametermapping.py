from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BuildSystemSharedDtoParameterMappingSourceTypeEnum(str, Enum):
    CONSTANT = "Constant"
    VARIABLE = "Variable"


@dataclass_json
@dataclass
class BuildSystemSharedDtoParameterMapping:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    source_type: Optional[BuildSystemSharedDtoParameterMappingSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
