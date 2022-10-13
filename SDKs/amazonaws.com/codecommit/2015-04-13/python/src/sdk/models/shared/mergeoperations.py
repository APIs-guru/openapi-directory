from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import changetypeenum_enum
from . import changetypeenum_enum


@dataclass_json
@dataclass
class MergeOperations:
    destination: Optional[changetypeenum_enum.ChangeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    source: Optional[changetypeenum_enum.ChangeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
