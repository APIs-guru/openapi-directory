from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BuildSystemSharedDtoParameterMappingSourceTypeEnum(str, Enum):
    CONSTANT = "Constant"
    VARIABLE = "Variable"


@dataclass_json
@dataclass
class BuildSystemSharedDtoParameterMapping:
    r"""BuildSystemSharedDtoParameterMapping
    A DTO for an IParameterMapping
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    source_type: Optional[BuildSystemSharedDtoParameterMappingSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    
